:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'msgf_plus'
.. highlight: bash

msgf_plus
=========

.. conda:recipe:: msgf_plus
   :replaces_section_title:
   :noindex:

   MS\-GF\+ is a new MS\/MS database search tool that is sensitive \(it identifies more peptides than other database search tools and as many peptides as spectral library search tools\) and universal \(works well for diverse types of spectra\, different configurations of MS instruments and different experimental protocols\).

   :homepage: https://omics.pnl.gov/software/ms-gf
   :license: https://github.com/sangtaekim/msgfplus/blob/master/LICENSE.txt
   :recipe: /`msgf_plus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/msgf_plus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/msgf_plus/meta.yaml>`_
   :links: biotools: :biotools:`MSGFplus`, doi: :doi:`10.1038/ncomms6277`

   


.. conda:package:: msgf_plus

   |downloads_msgf_plus| |docker_msgf_plus|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2020.06.22-0</code>,  <code>2020.06.16-0</code>,  <code>2020.03.14-0</code>,  <code>2020.03.12-0</code>,  <code>2020.01.15-0</code>,  <code>2019.07.03-0</code>,  <code>2019.06.28-0</code>,  <code>2019.04.18-0</code>,  <code>2019.02.28-3</code>,  </span></summary>
      

      ``2020.06.22-0``,  ``2020.06.16-0``,  ``2020.03.14-0``,  ``2020.03.12-0``,  ``2020.01.15-0``,  ``2019.07.03-0``,  ``2019.06.28-0``,  ``2019.04.18-0``,  ``2019.02.28-3``,  ``2017.07.21-3``,  ``2017.07.21-2``,  ``2017.07.21-1``,  ``2017.07.21-0``,  ``2016.10.26-2``,  ``2016.10.26-1``,  ``2016.10.26-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends openjdk: ``<9``
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install msgf_plus

   and update with::

      conda update msgf_plus

   or use the docker container::

      docker pull quay.io/biocontainers/msgf_plus:<tag>

   (see `msgf_plus/tags`_ for valid values for ``<tag>``)


.. |downloads_msgf_plus| image:: https://img.shields.io/conda/dn/bioconda/msgf_plus.svg?style=flat
   :target: https://anaconda.org/bioconda/msgf_plus
   :alt:   (downloads)
.. |docker_msgf_plus| image:: https://quay.io/repository/biocontainers/msgf_plus/status
   :target: https://quay.io/repository/biocontainers/msgf_plus
.. _`msgf_plus/tags`: https://quay.io/repository/biocontainers/msgf_plus?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/msgf_plus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/msgf_plus/README.html