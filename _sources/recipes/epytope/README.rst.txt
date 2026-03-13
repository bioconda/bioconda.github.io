:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'epytope'
.. highlight: bash

epytope
=======

.. conda:recipe:: epytope
   :replaces_section_title:
   :noindex:

   A Framework for Epitope Detection and Vaccine Design

   :homepage: https://github.com/KohlbacherLab/epytope
   :documentation: https://epytope.readthedocs.io/en/latest/
   
   :developer docs: https://github.com/KohlbacherLab/epytope/tree/develop
   :license: BSD / BSD
   :recipe: /`epytope <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/epytope>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/epytope/meta.yaml>`_

   


.. conda:package:: epytope

   |downloads_epytope| |docker_epytope|

   :versions:
      
      

      ``3.3.1-0``,  ``3.3.0-0``,  ``3.2.0-0``,  ``3.1.0-0``,  ``3.0.0-0``

      

   
   :depends on beautifulsoup4: 
   :depends on biopython: 
   :depends on h5py: ``<=2.10.0``
   :depends on keras: ``<=2.3.1``
   :depends on mhcflurry: ``<=1.4.3``
   :depends on mhcnuggets: ``2.3.2``
   :depends on pandas: ``>=1.3.5``
   :depends on pymysql: 
   :depends on pyomo: ``>=4.0``
   :depends on python: 
   :depends on pyvcf3: 
   :depends on requests: 
   :depends on setuptools: 

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install epytope

to add into an existing workspace instead, run::

    pixi add epytope

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install epytope

Alternatively, to install into a new environment, run::

    conda create -n envname epytope

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/epytope:<tag>

(see `epytope/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_epytope| image:: https://img.shields.io/conda/dn/bioconda/epytope.svg?style=flat
   :target: https://anaconda.org/bioconda/epytope
   :alt:   (downloads)
.. |docker_epytope| image:: https://quay.io/repository/biocontainers/epytope/status
   :target: https://quay.io/repository/biocontainers/epytope
.. _`epytope/tags`: https://quay.io/repository/biocontainers/epytope?tab=tags


.. raw:: html

    <script>
        var package = "epytope";
        var versions = ["3.3.1","3.3.0","3.2.0","3.1.0","3.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/epytope/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/epytope/README.html