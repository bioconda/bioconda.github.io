:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'transit'
.. highlight: bash

transit
=======

.. conda:recipe:: transit
   :replaces_section_title:
   :noindex:

   TRANSIT

   :homepage: http://github.com/mad-lab/transit
   :developer docs: https://github.com/simongog/sdsl-lite
   :license: GPL / GPL-3
   :recipe: /`transit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/transit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/transit/meta.yaml>`_

   TRANSIT is a software that can be used to analyze Tn\-Seq datasets.
   It includes various statistical calculations of essentiality of
   genes or genomic regions \(including conditional essentiality
   between 2 conditions\).



.. conda:package:: transit

   |downloads_transit| |docker_transit|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.2.0-0</code>,  <code>3.1.0-0</code>,  <code>3.0.2-1</code>,  <code>3.0.2-0</code>,  <code>3.0.1-0</code>,  <code>2.5.2-0</code>,  <code>2.3.3-1</code>,  <code>2.3.3-0</code>,  <code>2.3.2-0</code>,  </span></summary>
      

      ``3.2.0-0``,  ``3.1.0-0``,  ``3.0.2-1``,  ``3.0.2-0``,  ``3.0.1-0``,  ``2.5.2-0``,  ``2.3.3-1``,  ``2.3.3-0``,  ``2.3.2-0``,  ``2.3.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends matplotlib-base: ``>=3,<3.1``
   :depends numpy: ``>=1.16,<1.17``
   :depends pillow: ``>=6,<6.1``
   :depends python: ``>=3.6``
   :depends scipy: ``>=1.2,<1.3``
   :depends statsmodels: ``>=0.9,<0.10``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install transit

   and update with::

      conda update transit

   or use the docker container::

      docker pull quay.io/biocontainers/transit:<tag>

   (see `transit/tags`_ for valid values for ``<tag>``)


.. |downloads_transit| image:: https://img.shields.io/conda/dn/bioconda/transit.svg?style=flat
   :target: https://anaconda.org/bioconda/transit
   :alt:   (downloads)
.. |docker_transit| image:: https://quay.io/repository/biocontainers/transit/status
   :target: https://quay.io/repository/biocontainers/transit
.. _`transit/tags`: https://quay.io/repository/biocontainers/transit?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/transit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/transit/README.html