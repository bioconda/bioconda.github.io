:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gmap'
.. highlight: bash

gmap
====

.. conda:recipe:: gmap
   :replaces_section_title:
   :noindex:

   Genomic mapping and alignment program for mRNA and EST sequences.

   :homepage: http://research-pub.gene.com/gmap/
   :license: APACHE / Apache-2.0
   :recipe: /`gmap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gmap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gmap/meta.yaml>`_
   :links: biotools: :biotools:`gmap`, doi: :doi:`10.1093/bioinformatics/bti310`, doi: :doi:`10.1093/bioinformatics/btq057`

   


.. conda:package:: gmap

   |downloads_gmap| |docker_gmap|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2020.10.14-0</code>,  <code>2020.06.30-0</code>,  <code>2020.06.01-1</code>,  <code>2020.06.01-0</code>,  <code>2020.04.08-1</code>,  <code>2020.04.08-0</code>,  <code>2019.09.12-1</code>,  <code>2019.09.12-0</code>,  <code>2019.06.10-0</code>,  </span></summary>
      

      ``2020.10.14-0``,  ``2020.06.30-0``,  ``2020.06.01-1``,  ``2020.06.01-0``,  ``2020.04.08-1``,  ``2020.04.08-0``,  ``2019.09.12-1``,  ``2019.09.12-0``,  ``2019.06.10-0``,  ``2019.02.26-0``,  ``2018.07.04-0``,  ``2018.03.25-2``,  ``2018.03.25-1``,  ``2018.03.25-0``,  ``2017.11.15-4``,  ``2017.11.15-3``,  ``2017.11.15-2``,  ``2017.11.15-1``,  ``2017.11.15-0``,  ``2017.10.30-6``,  ``2017.10.30-5``,  ``2017.10.30-4``,  ``2017.10.30-3``,  ``2017.10.30-2``,  ``2017.10.30-1``,  ``2017.10.30-0``,  ``2017.09.30-7``,  ``2017.09.30-6``,  ``2017.09.30-5``,  ``2017.09.30-4``,  ``2017.09.30-3``,  ``2017.09.30-2``,  ``2017.09.30-1``,  ``2017.09.30-0``,  ``2017.05.08-6``,  ``2017.05.08-5``,  ``2017.05.08-4``,  ``2017.05.08-3``,  ``2017.05.08-2``,  ``2017.05.08-1``,  ``2017.05.08-0``,  ``2017.02.15-3``,  ``2017.02.15-2``,  ``2017.02.15-1``,  ``2016.09.23-3``,  ``2016.09.23-2``,  ``2016.09.23-1``,  ``2016.09.23-0``,  ``2015.12.31-5``,  ``2015.12.31-4``,  ``2015.12.31-3``,  ``2015.12.31-2``,  ``2015.12.31-1``,  ``2015.12.31-0``,  ``2015.09.10-2``,  ``2015.09.10-1``,  ``2015.09.10-0``,  ``2014.12.28-6``,  ``2014.12.28-5``,  ``2014.12.23-6``,  ``2014.12.23-5``,  ``2014.12.23-4``,  ``2014.12.23-3``,  ``2014.12.23-2``,  ``2014.12.23-1``

      
      .. raw:: html

         </details>
      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libgcc-ng: ``>=7.5.0``
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gmap

   and update with::

      conda update gmap

   or use the docker container::

      docker pull quay.io/biocontainers/gmap:<tag>

   (see `gmap/tags`_ for valid values for ``<tag>``)


.. |downloads_gmap| image:: https://img.shields.io/conda/dn/bioconda/gmap.svg?style=flat
   :target: https://anaconda.org/bioconda/gmap
   :alt:   (downloads)
.. |docker_gmap| image:: https://quay.io/repository/biocontainers/gmap/status
   :target: https://quay.io/repository/biocontainers/gmap
.. _`gmap/tags`: https://quay.io/repository/biocontainers/gmap?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gmap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gmap/README.html