:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'elprep'
.. highlight: bash

elprep
======

.. conda:recipe:: elprep
   :replaces_section_title:
   :noindex:

   elPrep is a high\-performance tool for preparing .sam\/.bam files for variant calling in sequencing pipelines. It can be used as a drop\-in replacement for SAMtools\/Picard\/GATK4.

   :homepage: https://github.com/ExaScience/elprep
   :license: GNU AFFERO GENERAL PUBLIC LICENSE
   :recipe: /`elprep <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/elprep>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/elprep/meta.yaml>`_

   


.. conda:package:: elprep

   |downloads_elprep| |docker_elprep|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>5.0.1-1</code>,  <code>5.0.1-0</code>,  <code>4.1.6-1</code>,  <code>4.1.6-0</code>,  <code>4.1.5-0</code>,  <code>4.1.4-0</code>,  <code>4.1.3-0</code>,  <code>4.1.2-0</code>,  <code>4.1.1-0</code>,  </span></summary>
      

      ``5.0.1-1``,  ``5.0.1-0``,  ``4.1.6-1``,  ``4.1.6-0``,  ``4.1.5-0``,  ``4.1.4-0``,  ``4.1.3-0``,  ``4.1.2-0``,  ``4.1.1-0``,  ``4.1.0-0``,  ``4.0.1-0``,  ``4.0.0-0``,  ``3.04-1``,  ``3.04-0``

      
      .. raw:: html

         </details>
      

   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install elprep

   and update with::

      conda update elprep

   or use the docker container::

      docker pull quay.io/biocontainers/elprep:<tag>

   (see `elprep/tags`_ for valid values for ``<tag>``)


.. |downloads_elprep| image:: https://img.shields.io/conda/dn/bioconda/elprep.svg?style=flat
   :target: https://anaconda.org/bioconda/elprep
   :alt:   (downloads)
.. |docker_elprep| image:: https://quay.io/repository/biocontainers/elprep/status
   :target: https://quay.io/repository/biocontainers/elprep
.. _`elprep/tags`: https://quay.io/repository/biocontainers/elprep?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/elprep/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/elprep/README.html