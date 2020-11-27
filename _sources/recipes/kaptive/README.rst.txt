:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kaptive'
.. highlight: bash

kaptive
=======

.. conda:recipe:: kaptive
   :replaces_section_title:
   :noindex:

   Reports information about surface polysaccharide loci for Klebsiella and Acinetobacter baumannii genome assemblies

   :homepage: https://github.com/katholt/Kaptive
   :license: GPL3
   :recipe: /`kaptive <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kaptive>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kaptive/meta.yaml>`_

   


.. conda:package:: kaptive

   |downloads_kaptive| |docker_kaptive|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.7.3-0</code>,  <code>0.7.2-0</code>,  <code>0.7.1-0</code>,  <code>0.7.0-0</code>,  <code>0.6.1-0</code>,  <code>0.6.0-0</code>,  <code>0.5.1-2</code>,  <code>0.5.1-0</code>,  <code>0.3-0</code>,  </span></summary>
      

      ``0.7.3-0``,  ``0.7.2-0``,  ``0.7.1-0``,  ``0.7.0-0``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.1-2``,  ``0.5.1-0``,  ``0.3-0``,  ``0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: ``<1.78``
   :depends blast: ``>=2.3.0``
   :depends numpy: 
   :depends python: ``>=3``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install kaptive

   and update with::

      conda update kaptive

   or use the docker container::

      docker pull quay.io/biocontainers/kaptive:<tag>

   (see `kaptive/tags`_ for valid values for ``<tag>``)


.. |downloads_kaptive| image:: https://img.shields.io/conda/dn/bioconda/kaptive.svg?style=flat
   :target: https://anaconda.org/bioconda/kaptive
   :alt:   (downloads)
.. |docker_kaptive| image:: https://quay.io/repository/biocontainers/kaptive/status
   :target: https://quay.io/repository/biocontainers/kaptive
.. _`kaptive/tags`: https://quay.io/repository/biocontainers/kaptive?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kaptive/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kaptive/README.html