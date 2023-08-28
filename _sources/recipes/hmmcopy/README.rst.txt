:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hmmcopy'
.. highlight: bash

hmmcopy
=======

.. conda:recipe:: hmmcopy
   :replaces_section_title:
   :noindex:

   C\+\+ based programs for analyzing BAM files and preparing read counts \-\- used with bioconductor\-hmmcopy

   :homepage: http://compbio.bccrc.ca/software/hmmcopy/
   :license: GPL-3
   :recipe: /`hmmcopy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmmcopy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmmcopy/meta.yaml>`_

   


.. conda:package:: hmmcopy

   |downloads_hmmcopy| |docker_hmmcopy|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.1.1-9</code>,  <code>0.1.1-8</code>,  <code>0.1.1-7</code>,  <code>0.1.1-6</code>,  <code>0.1.1-5</code>,  <code>0.1.1-4</code>,  <code>0.1.1-3</code>,  <code>0.1.1-2</code>,  <code>0.1.1-1</code>,  </span></summary>
      

      ``0.1.1-9``,  ``0.1.1-8``,  ``0.1.1-7``,  ``0.1.1-6``,  ``0.1.1-5``,  ``0.1.1-4``,  ``0.1.1-3``,  ``0.1.1-2``,  ``0.1.1-1``,  ``0.1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bowtie: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends perl: 
   :depends zlib: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install hmmcopy

   and update with::

      mamba update hmmcopy

  To create a new environment, run::

      mamba create --name myenvname hmmcopy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hmmcopy:<tag>

   (see `hmmcopy/tags`_ for valid values for ``<tag>``)


.. |downloads_hmmcopy| image:: https://img.shields.io/conda/dn/bioconda/hmmcopy.svg?style=flat
   :target: https://anaconda.org/bioconda/hmmcopy
   :alt:   (downloads)
.. |docker_hmmcopy| image:: https://quay.io/repository/biocontainers/hmmcopy/status
   :target: https://quay.io/repository/biocontainers/hmmcopy
.. _`hmmcopy/tags`: https://quay.io/repository/biocontainers/hmmcopy?tab=tags


.. raw:: html

    <script>
        var package = "hmmcopy";
        var versions = ["0.1.1","0.1.1","0.1.1","0.1.1","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hmmcopy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hmmcopy/README.html