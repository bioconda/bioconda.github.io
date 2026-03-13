:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'jass_preprocessing'
.. highlight: bash

jass_preprocessing
==================

.. conda:recipe:: jass_preprocessing
   :replaces_section_title:
   :noindex:

   Harmonizing raw GWAS summary statistic for further analysis with jass

   :homepage: http://statistical-genetics.pages.pasteur.fr/jass_preprocessing/
   :license: MIT / MIT
   :recipe: /`jass_preprocessing <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jass_preprocessing>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jass_preprocessing/meta.yaml>`_

   


.. conda:package:: jass_preprocessing

   |downloads_jass_preprocessing| |docker_jass_preprocessing|

   :versions:
      
      

      ``2.2-0``,  ``2.1-0``,  ``2.0.1-0``,  ``2.0-0``,  ``1.0-0``

      

   
   :depends on numpy: 
   :depends on pandas: 
   :depends on python: ``>=3.6``
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

    pixi global install jass_preprocessing

to add into an existing workspace instead, run::

    pixi add jass_preprocessing

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install jass_preprocessing

Alternatively, to install into a new environment, run::

    conda create -n envname jass_preprocessing

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/jass_preprocessing:<tag>

(see `jass_preprocessing/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_jass_preprocessing| image:: https://img.shields.io/conda/dn/bioconda/jass_preprocessing.svg?style=flat
   :target: https://anaconda.org/bioconda/jass_preprocessing
   :alt:   (downloads)
.. |docker_jass_preprocessing| image:: https://quay.io/repository/biocontainers/jass_preprocessing/status
   :target: https://quay.io/repository/biocontainers/jass_preprocessing
.. _`jass_preprocessing/tags`: https://quay.io/repository/biocontainers/jass_preprocessing?tab=tags


.. raw:: html

    <script>
        var package = "jass_preprocessing";
        var versions = ["2.2","2.1","2.0.1","2.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/jass_preprocessing/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/jass_preprocessing/README.html