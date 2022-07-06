:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'covsonar'
.. highlight: bash

covsonar
========

.. conda:recipe:: covsonar
   :replaces_section_title:
   :noindex:

   A database\-driven system for handling genomic sequences and screening genomic profiles.

   :homepage: https://github.com/rki-mf1/covsonar
   :license: GPL-3.0
   :recipe: /`covsonar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/covsonar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/covsonar/meta.yaml>`_

   


.. conda:package:: covsonar

   |downloads_covsonar| |docker_covsonar|

   :versions:
      
      

      ``2.0.0a0-0``

      

   
   :depends biopython: ``>=1.79,<1.80``
   :depends emboss: ``6.6.0``
   :depends more-itertools: ``>=8.7.0,<8.8.0``
   :depends mpire: ``>=2.3.3,<2.4.0``
   :depends pandas: ``>=1.4.0,<1.5.0``
   :depends pyaml: ``>=20.4.0,<20.5.0``
   :depends python: ``>=3.9,<4.0``
   :depends requests: ``>=2.28.0,<3.0.0``
   :depends tabulate: ``>=0.8.9,<0.9.0``
   :depends tqdm: ``>=4.59.0,<4.60.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install covsonar

   and update with::

      conda update covsonar

   or use the docker container::

      docker pull quay.io/biocontainers/covsonar:<tag>

   (see `covsonar/tags`_ for valid values for ``<tag>``)


.. |downloads_covsonar| image:: https://img.shields.io/conda/dn/bioconda/covsonar.svg?style=flat
   :target: https://anaconda.org/bioconda/covsonar
   :alt:   (downloads)
.. |docker_covsonar| image:: https://quay.io/repository/biocontainers/covsonar/status
   :target: https://quay.io/repository/biocontainers/covsonar
.. _`covsonar/tags`: https://quay.io/repository/biocontainers/covsonar?tab=tags


.. raw:: html

    <script>
        var package = "covsonar";
        var versions = ["2.0.0a0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/covsonar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/covsonar/README.html