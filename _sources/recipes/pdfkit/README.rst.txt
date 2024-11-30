:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pdfkit'
.. highlight: bash

pdfkit
======

.. conda:recipe:: pdfkit
   :replaces_section_title:
   :noindex:

   Wkhtmltopdf python wrapper to convert html to pdf using the webkit rendering engine and qt

   :homepage: https://pypi.python.org/pypi/pdfkit
   :license: MIT License
   :recipe: /`pdfkit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pdfkit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pdfkit/meta.yaml>`_

   


.. conda:package:: pdfkit

   |downloads_pdfkit| |docker_pdfkit|

   :versions:
      
      

      ``0.6.1-0``,  ``0.5.0-1``,  ``0.5.0-0``

      

   
   :depends python: ``>=2.7,<2.8.0a0``
   :depends wkhtmltopdf: 
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

      mamba install pdfkit

   and update with::

      mamba update pdfkit

  To create a new environment, run::

      mamba create --name myenvname pdfkit

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pdfkit:<tag>

   (see `pdfkit/tags`_ for valid values for ``<tag>``)


.. |downloads_pdfkit| image:: https://img.shields.io/conda/dn/bioconda/pdfkit.svg?style=flat
   :target: https://anaconda.org/bioconda/pdfkit
   :alt:   (downloads)
.. |docker_pdfkit| image:: https://quay.io/repository/biocontainers/pdfkit/status
   :target: https://quay.io/repository/biocontainers/pdfkit
.. _`pdfkit/tags`: https://quay.io/repository/biocontainers/pdfkit?tab=tags


.. raw:: html

    <script>
        var package = "pdfkit";
        var versions = ["0.6.1","0.5.0","0.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pdfkit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pdfkit/README.html