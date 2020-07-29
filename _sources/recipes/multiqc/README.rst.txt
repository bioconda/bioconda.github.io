:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'multiqc'
.. highlight: bash

multiqc
=======

.. conda:recipe:: multiqc
   :replaces_section_title:
   :noindex:

   Create aggregate bioinformatics analysis reports across many samples and tools

   :homepage: http://multiqc.info
   :documentation: http://multiqc.info/docs/
   
   :developer docs: https://github.com/ewels/MultiQC
   :license: GPL3 / GNU General Public License v3 (GPLv3)
   :recipe: /`multiqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/multiqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/multiqc/meta.yaml>`_
   :links: biotools: :biotools:`multiqc`, doi: :doi:`https://doi.org/10.1093/bioinformatics/btw354`

   


.. conda:package:: multiqc

   |downloads_multiqc| |docker_multiqc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.9-1</code>,  <code>1.9-0</code>,  <code>1.8-2</code>,  <code>1.8-1</code>,  <code>1.8-0</code>,  <code>1.7-4</code>,  <code>1.7-3</code>,  <code>1.7-2</code>,  <code>1.7-1</code>,  </span></summary>
      

      ``1.9-1``,  ``1.9-0``,  ``1.8-2``,  ``1.8-1``,  ``1.8-0``,  ``1.7-4``,  ``1.7-3``,  ``1.7-2``,  ``1.7-1``,  ``1.7-0``,  ``1.6-0``,  ``1.6a0-2``,  ``1.6a0-1``,  ``1.6a0-0``,  ``1.5-0``,  ``1.5a-0``,  ``1.4-0``,  ``1.3-2``,  ``1.3-1``,  ``1.3-0``,  ``1.2-0``,  ``1.1-0``,  ``1.0-4``,  ``1.0-1``,  ``1.0-0``,  ``0.9.1a0-4``,  ``0.9.1a0-3``,  ``0.9.1a0-2``,  ``0.9.1a0-1``,  ``0.9.1a0-0``,  ``0.9-0``,  ``0.9a-0``,  ``0.8-0``,  ``0.8dev0-0``,  ``0.7.1dev0-1``,  ``0.7.1dev0-0``,  ``0.7-0``,  ``0.6-0``,  ``0.5-0``,  ``0.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends click: 
   :depends coloredlogs: 
   :depends future: ``>0.14.0``
   :depends jinja2: ``>=2.9``
   :depends lzstring: 
   :depends markdown: 
   :depends matplotlib-base: ``>=2.1.1``
   :depends networkx: 
   :depends numpy: 
   :depends python: ``>=3.6``
   :depends pyyaml: ``>=4``
   :depends requests: 
   :depends setuptools: 
   :depends simplejson: 
   :depends spectra: ``>=0.0.10``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install multiqc

   and update with::

      conda update multiqc

   or use the docker container::

      docker pull quay.io/biocontainers/multiqc:<tag>

   (see `multiqc/tags`_ for valid values for ``<tag>``)


.. |downloads_multiqc| image:: https://img.shields.io/conda/dn/bioconda/multiqc.svg?style=flat
   :target: https://anaconda.org/bioconda/multiqc
   :alt:   (downloads)
.. |docker_multiqc| image:: https://quay.io/repository/biocontainers/multiqc/status
   :target: https://quay.io/repository/biocontainers/multiqc
.. _`multiqc/tags`: https://quay.io/repository/biocontainers/multiqc?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/multiqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/multiqc/README.html