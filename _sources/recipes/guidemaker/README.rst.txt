:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'guidemaker'
.. highlight: bash

guidemaker
==========

.. conda:recipe:: guidemaker
   :replaces_section_title:
   :noindex:

   GuideMaker\: Software to design gRNAs pools in non\-model genomes and CRISPR\-Cas systems

   :homepage: https://guidemaker.app.scinet.usda.gov/
   :documentation: https://guidemaker.org/
   
   :developer docs: https://github.com/USDA-ARS-GBRU/GuideMaker
   :license: PUBLIC-DOMAIN / CC0-1.0
   :recipe: /`guidemaker <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/guidemaker>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/guidemaker/meta.yaml>`_
   :links: biotools: :biotools:`GuideMaker`, doi: :doi:`10.5281/zenodo.4849258`

   


.. conda:package:: guidemaker

   |downloads_guidemaker| |docker_guidemaker|

   :versions:
      
      

      ``0.4.2-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.6-0``,  ``0.3.4-0``,  ``0.2.0-0``

      

   
   :depends on altair: 
   :depends on biopython: ``>=1.79``
   :depends on importlib-resources: ``>=6.0``
   :depends on nmslib: ``>=2.0.6``
   :depends on numpy: ``>=1.11``
   :depends on onnxruntime: ``>=1.8.1``
   :depends on pandas: ``>=1.0.0``
   :depends on pdoc3: 
   :depends on pip: 
   :depends on pybedtools: ``>=0.8.2``
   :depends on pytest: ``>=4.6``
   :depends on pytest-cov: 
   :depends on python: ``>=3.8,<3.12``
   :depends on pyyaml: ``>=5.4.1``
   :depends on regex: ``2020.11.13``
   :depends on streamlit: ``>=0.81.0``
   :depends on streamlit_tags: ``>=1.2.6``

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

    pixi global install guidemaker

to add into an existing workspace instead, run::

    pixi add guidemaker

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install guidemaker

Alternatively, to install into a new environment, run::

    conda create -n envname guidemaker

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/guidemaker:<tag>

(see `guidemaker/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_guidemaker| image:: https://img.shields.io/conda/dn/bioconda/guidemaker.svg?style=flat
   :target: https://anaconda.org/bioconda/guidemaker
   :alt:   (downloads)
.. |docker_guidemaker| image:: https://quay.io/repository/biocontainers/guidemaker/status
   :target: https://quay.io/repository/biocontainers/guidemaker
.. _`guidemaker/tags`: https://quay.io/repository/biocontainers/guidemaker?tab=tags


.. raw:: html

    <script>
        var package = "guidemaker";
        var versions = ["0.4.2","0.4.1","0.4.0","0.3.6","0.3.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/guidemaker/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/guidemaker/README.html