:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'submission-excel2xml'
.. highlight: bash

submission-excel2xml
====================

.. conda:recipe:: submission-excel2xml
   :replaces_section_title:
   :noindex:

   Generate DRA metadata XML files from Excel spreadsheet

   :homepage: https://github.com/ddbj/submission-excel2xml
   :license: Apache License 2.0
   :recipe: /`submission-excel2xml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/submission-excel2xml>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/submission-excel2xml/meta.yaml>`_

   


.. conda:package:: submission-excel2xml

   |downloads_submission-excel2xml| |docker_submission-excel2xml|

   :versions:
      
      

      ``3.0-0``,  ``2.9.1-0``,  ``2.9-0``,  ``2.8.1-0``,  ``2.8-0``,  ``2.6-0``,  ``2.5-0``,  ``2.0.0-0``

      

   
   :depends libxml2: 
   :depends ruby: ``>=3.0``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install submission-excel2xml

   and update with::

      mamba update submission-excel2xml

  To create a new environment, run::

      mamba create --name myenvname submission-excel2xml

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/submission-excel2xml:<tag>

   (see `submission-excel2xml/tags`_ for valid values for ``<tag>``)


.. |downloads_submission-excel2xml| image:: https://img.shields.io/conda/dn/bioconda/submission-excel2xml.svg?style=flat
   :target: https://anaconda.org/bioconda/submission-excel2xml
   :alt:   (downloads)
.. |docker_submission-excel2xml| image:: https://quay.io/repository/biocontainers/submission-excel2xml/status
   :target: https://quay.io/repository/biocontainers/submission-excel2xml
.. _`submission-excel2xml/tags`: https://quay.io/repository/biocontainers/submission-excel2xml?tab=tags


.. raw:: html

    <script>
        var package = "submission-excel2xml";
        var versions = ["3.0","2.9.1","2.9","2.8.1","2.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/submission-excel2xml/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/submission-excel2xml/README.html