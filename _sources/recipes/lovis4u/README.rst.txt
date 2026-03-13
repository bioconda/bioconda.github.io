:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lovis4u'
.. highlight: bash

lovis4u
=======

.. conda:recipe:: lovis4u
   :replaces_section_title:
   :noindex:

   Loci Visualisation Tool.

   :homepage: https://art-egorov.github.io/lovis4u/
   :license: BSD-3-Clause AND GPL-3.0 AND WTFPL
   :recipe: /`lovis4u <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lovis4u>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lovis4u/meta.yaml>`_

   


.. conda:package:: lovis4u

   |downloads_lovis4u| |docker_lovis4u|

   :versions:
      
      

      ``0.1.9-0``,  ``0.1.8-0``,  ``0.1.7-0``,  ``0.1.6-0``,  ``0.1.5.1-0``,  ``0.1.5-0``,  ``0.1.4.1-0``,  ``0.1.1.2-0``

      

   
   :depends on bcbio-gff: 
   :depends on biopython: 
   :depends on configs: 
   :depends on distinctipy: 
   :depends on matplotlib-base: 
   :depends on pandas: 
   :depends on progress: 
   :depends on pyhmmer: ``>=0.12.0``
   :depends on python: 
   :depends on reportlab: 
   :depends on requests: 
   :depends on scipy: 
   :depends on seaborn: 

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

    pixi global install lovis4u

to add into an existing workspace instead, run::

    pixi add lovis4u

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install lovis4u

Alternatively, to install into a new environment, run::

    conda create -n envname lovis4u

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/lovis4u:<tag>

(see `lovis4u/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_lovis4u| image:: https://img.shields.io/conda/dn/bioconda/lovis4u.svg?style=flat
   :target: https://anaconda.org/bioconda/lovis4u
   :alt:   (downloads)
.. |docker_lovis4u| image:: https://quay.io/repository/biocontainers/lovis4u/status
   :target: https://quay.io/repository/biocontainers/lovis4u
.. _`lovis4u/tags`: https://quay.io/repository/biocontainers/lovis4u?tab=tags


.. raw:: html

    <script>
        var package = "lovis4u";
        var versions = ["0.1.9","0.1.8","0.1.7","0.1.6","0.1.5.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lovis4u/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lovis4u/README.html