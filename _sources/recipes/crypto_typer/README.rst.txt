:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'crypto_typer'
.. highlight: bash

crypto_typer
============

.. conda:recipe:: crypto_typer
   :replaces_section_title:
   :noindex:

   This package crypto\_typer\: tool to subtype the parasite\, Cryptosporidium\, based on the 18S and gp60 markers.

   :homepage: https://github.com/christineyanta/crypto_typer
   :license: Apache License, Version 2.0
   :recipe: /`crypto_typer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crypto_typer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crypto_typer/meta.yaml>`_

   


.. conda:package:: crypto_typer

   |downloads_crypto_typer| |docker_crypto_typer|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends biopython: ``>=1.70``
   :depends blast: ``2.9.0``
   :depends numpy: ``>=1.15.4``
   :depends python: ``>=3.4``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install crypto_typer

   and update with::

      conda update crypto_typer

   or use the docker container::

      docker pull quay.io/biocontainers/crypto_typer:<tag>

   (see `crypto_typer/tags`_ for valid values for ``<tag>``)


.. |downloads_crypto_typer| image:: https://img.shields.io/conda/dn/bioconda/crypto_typer.svg?style=flat
   :target: https://anaconda.org/bioconda/crypto_typer
   :alt:   (downloads)
.. |docker_crypto_typer| image:: https://quay.io/repository/biocontainers/crypto_typer/status
   :target: https://quay.io/repository/biocontainers/crypto_typer
.. _`crypto_typer/tags`: https://quay.io/repository/biocontainers/crypto_typer?tab=tags


.. raw:: html

    <script>
        var package = "crypto_typer";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/crypto_typer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/crypto_typer/README.html