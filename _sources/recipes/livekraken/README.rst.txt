:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'livekraken'
.. highlight: bash

livekraken
==========

.. conda:recipe:: livekraken
   :replaces_section_title:
   :noindex:

   LiveKraken is a real\-time metagenomic classifier for Illumina sequencing data.

   :homepage: https://gitlab.com/SimonHTausch/LiveKraken
   :license: GPLv3
   :recipe: /`livekraken <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/livekraken>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/livekraken/meta.yaml>`_

   


.. conda:package:: livekraken

   |downloads_livekraken| |docker_livekraken|

   :versions:
      
      

      ``1.0-8``,  ``1.0-7``,  ``1.0-6``,  ``1.0-5``,  ``1.0-4``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends boost-cpp: ``>=1.74.0,<1.74.1.0a0``
   :depends kmer-jellyfish: ``1.*``
   :depends libgcc-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install livekraken

   and update with::

      conda update livekraken

   or use the docker container::

      docker pull quay.io/biocontainers/livekraken:<tag>

   (see `livekraken/tags`_ for valid values for ``<tag>``)


.. |downloads_livekraken| image:: https://img.shields.io/conda/dn/bioconda/livekraken.svg?style=flat
   :target: https://anaconda.org/bioconda/livekraken
   :alt:   (downloads)
.. |docker_livekraken| image:: https://quay.io/repository/biocontainers/livekraken/status
   :target: https://quay.io/repository/biocontainers/livekraken
.. _`livekraken/tags`: https://quay.io/repository/biocontainers/livekraken?tab=tags


.. raw:: html

    <script>
        var package = "livekraken";
        var versions = ["1.0","1.0","1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/livekraken/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/livekraken/README.html