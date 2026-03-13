:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mimi'
.. highlight: bash

mimi
====

.. conda:recipe:: mimi
   :replaces_section_title:
   :noindex:

   Molecular Isotope Mass Identifier.

   :homepage: https://github.com/NYUAD-Core-Bioinformatics/MIMI
   :license: Academic and Non-Commercial Research Use
   :recipe: /`mimi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mimi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mimi/meta.yaml>`_

   MIMI \(Molecular Isotope Mass Identifier\) is a tool for analyzing mass 
   spectrometry data to identify molecular compounds based on their isotopic 
   patterns.



.. conda:package:: mimi

   |downloads_mimi| |docker_mimi|

   :versions:
      
      

      ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends on json5: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on python: ``>=3.11``
   :depends on setuptools: 
   :depends on tqdm: 
   :depends on urllib3: 

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

    pixi global install mimi

to add into an existing workspace instead, run::

    pixi add mimi

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mimi

Alternatively, to install into a new environment, run::

    conda create -n envname mimi

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mimi:<tag>

(see `mimi/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mimi| image:: https://img.shields.io/conda/dn/bioconda/mimi.svg?style=flat
   :target: https://anaconda.org/bioconda/mimi
   :alt:   (downloads)
.. |docker_mimi| image:: https://quay.io/repository/biocontainers/mimi/status
   :target: https://quay.io/repository/biocontainers/mimi
.. _`mimi/tags`: https://quay.io/repository/biocontainers/mimi?tab=tags


.. raw:: html

    <script>
        var package = "mimi";
        var versions = ["1.0.4","1.0.3","1.0.2","1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mimi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mimi/README.html