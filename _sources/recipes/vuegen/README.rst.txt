:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vuegen'
.. highlight: bash

vuegen
======

.. conda:recipe:: vuegen
   :replaces_section_title:
   :noindex:

   VueGen automates the creation of reports from bioinformatics outputs\, 
   supporting formats like PDF\, HTML\, DOCX\, ODT\, PPTX\, Reveal.js\, 
   Jupyter notebooks\, and Streamlit web applications. Users simply 
   provide a directory with output files—such as plots\, tables\, networks\, 
   Markdown text\, and HTML files—and VueGen compiles them into a structured report.


   :homepage: https://github.com/Multiomics-Analytics-Group/vuegen
   :documentation: https://vuegen.readthedocs.io
   
   :license: MIT / MIT
   :recipe: /`vuegen <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vuegen>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vuegen/meta.yaml>`_

   


.. conda:package:: vuegen

   |downloads_vuegen| |docker_vuegen|

   :versions:
      
      

      ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.3-1``,  ``0.3.3-0``,  ``0.3.2-2``,  ``0.3.2-0``,  ``0.3.1-0``,  ``0.2.2-1``,  ``0.2.2-0``

      

   
   :depends altair: 
   :depends dataframe_image: 
   :depends itables: ``>=2.2.2,<3.0.0``
   :depends lxml: ``>=5.3.0,<6.0.0``
   :depends matplotlib-base: ``>=3.9.2,<4.0.0``
   :depends nb_conda_kernels: ``>=2.4.0,<3.0.0``
   :depends nbclient: ``>=0.10.0,<0.11.0``
   :depends nbformat: ``>=5.10.4,<6.0.0``
   :depends openpyxl: ``>=3.1.5,<4.0.0``
   :depends pandas: ``>=2.2.3,<3.0.0``
   :depends plotly: ``5.15.0.*``
   :depends python: ``>=3.11,<4.0``
   :depends python-kaleido: ``0.2.0.*``
   :depends pyvis: ``>=0.3.2,<0.4.0``
   :depends pyyaml: ``>=6.0.2,<7.0.0``
   :depends quarto: 
   :depends streamlit: ``1.39.0.*``
   :depends streamlit-aggrid: 
   :depends vl-convert-python: ``>=1.7.0,<2.0.0``
   :depends xlrd: ``>=2.0.1,<3.0.0``
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install vuegen

   and update with::

      mamba update vuegen

  To create a new environment, run::

      mamba create --name myenvname vuegen

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/vuegen:<tag>

   (see `vuegen/tags`_ for valid values for ``<tag>``)


.. |downloads_vuegen| image:: https://img.shields.io/conda/dn/bioconda/vuegen.svg?style=flat
   :target: https://anaconda.org/bioconda/vuegen
   :alt:   (downloads)
.. |docker_vuegen| image:: https://quay.io/repository/biocontainers/vuegen/status
   :target: https://quay.io/repository/biocontainers/vuegen
.. _`vuegen/tags`: https://quay.io/repository/biocontainers/vuegen?tab=tags


.. raw:: html

    <script>
        var package = "vuegen";
        var versions = ["0.4.1","0.4.0","0.3.3","0.3.3","0.3.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vuegen/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vuegen/README.html