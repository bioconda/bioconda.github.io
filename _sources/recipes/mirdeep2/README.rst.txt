:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mirdeep2'
.. highlight: bash

mirdeep2
========

.. conda:recipe:: mirdeep2
   :replaces_section_title:
   :noindex:

   A completely overhauled tool which discovers microRNA genes by analyzing sequenced RNAs

   :homepage: https://www.mdc-berlin.de/8551903/en/research/research_teams/systems_biology_of_gene_regulatory_elements/projects/miRDeep
   :license: academic
   :recipe: /`mirdeep2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mirdeep2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mirdeep2/meta.yaml>`_

   


.. conda:package:: mirdeep2

   |downloads_mirdeep2| |docker_mirdeep2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.1.2-0</code>,  <code>2.0.0.8-5</code>,  <code>2.0.0.8-4</code>,  <code>2.0.0.8-3</code>,  <code>2.0.0.8-2</code>,  <code>2.0.0.8-1</code>,  <code>2.0.0.8-0</code>,  <code>2.0.0.7-8</code>,  <code>2.0.0.7-7</code>,  </span></summary>
      

      ``2.0.1.2-0``,  ``2.0.0.8-5``,  ``2.0.0.8-4``,  ``2.0.0.8-3``,  ``2.0.0.8-2``,  ``2.0.0.8-1``,  ``2.0.0.8-0``,  ``2.0.0.7-8``,  ``2.0.0.7-7``,  ``2.0.0.7-6``,  ``2.0.0.7-5``,  ``2.0.0.7-4``,  ``2.0.0.7-3``,  ``2.0.0.7-2``,  ``2.0.0.7-1``

      
      .. raw:: html

         </details>
      

   
   :depends bowtie: 
   :depends perl: 
   :depends perl-compress-raw-zlib: 
   :depends perl-font-ttf: 
   :depends perl-lwp-simple: 
   :depends perl-pdf-api2: 
   :depends randfold: 
   :depends viennarna: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mirdeep2

   and update with::

      conda update mirdeep2

   or use the docker container::

      docker pull quay.io/biocontainers/mirdeep2:<tag>

   (see `mirdeep2/tags`_ for valid values for ``<tag>``)


.. |downloads_mirdeep2| image:: https://img.shields.io/conda/dn/bioconda/mirdeep2.svg?style=flat
   :target: https://anaconda.org/bioconda/mirdeep2
   :alt:   (downloads)
.. |docker_mirdeep2| image:: https://quay.io/repository/biocontainers/mirdeep2/status
   :target: https://quay.io/repository/biocontainers/mirdeep2
.. _`mirdeep2/tags`: https://quay.io/repository/biocontainers/mirdeep2?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mirdeep2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mirdeep2/README.html