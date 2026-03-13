:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fununifrac'
.. highlight: bash

fununifrac
==========

.. conda:recipe:: fununifrac
   :replaces_section_title:
   :noindex:

   A repository to implement UniFrac\, but on functional profiles of metagenomic data.

   :homepage: https://github.com/KoslickiLab/FunUniFrac
   :license: BSD / BSD-3-Clause
   :recipe: /`fununifrac <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fununifrac>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fununifrac/meta.yaml>`_

   


.. conda:package:: fununifrac

   |downloads_fununifrac| |docker_fununifrac|

   :versions:
      
      

      ``0.0.1-0``

      

   
   :depends on blist: 
   :depends on networkx: ``2.8.4.*``
   :depends on numpy: ``1.23.2.*``
   :depends on pandas: ``1.4.3.*``
   :depends on pyemd: ``0.5.1.*``
   :depends on pytest: 
   :depends on python: 
   :depends on requests: 
   :depends on scipy: ``1.8.0.*``
   :depends on seaborn: 
   :depends on sparse: 

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

    pixi global install fununifrac

to add into an existing workspace instead, run::

    pixi add fununifrac

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install fununifrac

Alternatively, to install into a new environment, run::

    conda create -n envname fununifrac

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/fununifrac:<tag>

(see `fununifrac/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_fununifrac| image:: https://img.shields.io/conda/dn/bioconda/fununifrac.svg?style=flat
   :target: https://anaconda.org/bioconda/fununifrac
   :alt:   (downloads)
.. |docker_fununifrac| image:: https://quay.io/repository/biocontainers/fununifrac/status
   :target: https://quay.io/repository/biocontainers/fununifrac
.. _`fununifrac/tags`: https://quay.io/repository/biocontainers/fununifrac?tab=tags


.. raw:: html

    <script>
        var package = "fununifrac";
        var versions = ["0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fununifrac/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fununifrac/README.html