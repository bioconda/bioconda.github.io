:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bio_hansel'
.. highlight: bash

bio_hansel
==========

.. conda:recipe:: bio_hansel
   :replaces_section_title:
   :noindex:

   Subtype Salmonella enterica genomes using 33bp k\-mer typing schemes.

   :homepage: https://github.com/phac-nml/biohansel
   :license: GPL3 / GNU General Public License v3 or later (GPLv3+)
   :recipe: /`bio_hansel <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bio_hansel>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bio_hansel/meta.yaml>`_

   \'Subtype Salmonella enterica genomes using 33bp k\-mer typing schemes. \'
   \'Includes schemes for Heidelberg and Enteritidis subtyping.\'



.. conda:package:: bio_hansel

   |downloads_bio_hansel| |docker_bio_hansel|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.6.1-0</code>,  <code>2.5.0-0</code>,  <code>2.4.0-0</code>,  <code>2.2.0-1</code>,  <code>2.2.0-0</code>,  <code>2.1.1-0</code>,  <code>2.1.0-0</code>,  <code>2.0.0-1</code>,  <code>2.0.0-0</code>,  </span></summary>
      

      ``2.6.1-0``,  ``2.5.0-0``,  ``2.4.0-0``,  ``2.2.0-1``,  ``2.2.0-0``,  ``2.1.1-0``,  ``2.1.0-0``,  ``2.0.0-1``,  ``2.0.0-0``,  ``1.3.2-0``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.0-0``,  ``1.1.3-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``0.2.0-1``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends attrs: 
   :depends numpy: ``>=1.12.1``
   :depends pandas: ``>=0.20.1``
   :depends pyahocorasick: ``>=1.1.6``
   :depends python: ``>=3``
   :depends rich: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bio_hansel

   and update with::

      conda update bio_hansel

   or use the docker container::

      docker pull quay.io/biocontainers/bio_hansel:<tag>

   (see `bio_hansel/tags`_ for valid values for ``<tag>``)


.. |downloads_bio_hansel| image:: https://img.shields.io/conda/dn/bioconda/bio_hansel.svg?style=flat
   :target: https://anaconda.org/bioconda/bio_hansel
   :alt:   (downloads)
.. |docker_bio_hansel| image:: https://quay.io/repository/biocontainers/bio_hansel/status
   :target: https://quay.io/repository/biocontainers/bio_hansel
.. _`bio_hansel/tags`: https://quay.io/repository/biocontainers/bio_hansel?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bio_hansel/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bio_hansel/README.html