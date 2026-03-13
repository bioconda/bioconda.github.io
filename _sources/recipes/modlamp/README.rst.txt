:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'modlamp'
.. highlight: bash

modlamp
=======

.. conda:recipe:: modlamp
   :replaces_section_title:
   :noindex:

   python package for in silico peptide design and QSAR studies

   :homepage: http://modlamp.org
   :documentation: https://modlamp.org/index.html
   
   :license: BSD / BSD
   :recipe: /`modlamp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/modlamp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/modlamp/meta.yaml>`_

   


.. conda:package:: modlamp

   |downloads_modlamp| |docker_modlamp|

   :versions:
      
      

      ``4.3.2-0``,  ``4.3.0-0``,  ``4.2.1-0``,  ``4.1.2-0``

      

   
   :depends on joblib: ``>=0.15.1``
   :depends on lxml: ``>=3.6.4``
   :depends on matplotlib-base: ``>=1.5.1``
   :depends on mysql-connector-python: ``>=2.2.9``
   :depends on numpy: ``>=1.10.4``
   :depends on pandas: ``>=0.18.1``
   :depends on python: 
   :depends on requests: ``>=2.11.1``
   :depends on scikit-learn: ``>=0.18.0``
   :depends on scipy: ``>=0.17.0``

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

    pixi global install modlamp

to add into an existing workspace instead, run::

    pixi add modlamp

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install modlamp

Alternatively, to install into a new environment, run::

    conda create -n envname modlamp

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/modlamp:<tag>

(see `modlamp/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_modlamp| image:: https://img.shields.io/conda/dn/bioconda/modlamp.svg?style=flat
   :target: https://anaconda.org/bioconda/modlamp
   :alt:   (downloads)
.. |docker_modlamp| image:: https://quay.io/repository/biocontainers/modlamp/status
   :target: https://quay.io/repository/biocontainers/modlamp
.. _`modlamp/tags`: https://quay.io/repository/biocontainers/modlamp?tab=tags


.. raw:: html

    <script>
        var package = "modlamp";
        var versions = ["4.3.2","4.3.0","4.2.1","4.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/modlamp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/modlamp/README.html