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
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0-10</code>,  <code>1.0-9</code>,  <code>1.0-8</code>,  <code>1.0-7</code>,  <code>1.0-6</code>,  <code>1.0-5</code>,  <code>1.0-4</code>,  <code>1.0-2</code>,  <code>1.0-1</code>,  </span></summary>
      

      ``1.0-10``,  ``1.0-9``,  ``1.0-8``,  ``1.0-7``,  ``1.0-6``,  ``1.0-5``,  ``1.0-4``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends boost-cpp: 
   :depends kmer-jellyfish: ``1.*``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends python: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install livekraken

   and update with::

      mamba update livekraken

  To create a new environment, run::

      mamba create --name myenvname livekraken

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

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