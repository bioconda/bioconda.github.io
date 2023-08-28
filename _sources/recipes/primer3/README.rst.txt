:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'primer3'
.. highlight: bash

primer3
=======

.. conda:recipe:: primer3
   :replaces_section_title:
   :noindex:

   Design PCR primers from DNA sequence. From mispriming libraries to sequence quality data to the generation of internal oligos\, primer3 does it.

   :homepage: https://github.com/primer3-org/primer3
   :license: GPLv2
   :recipe: /`primer3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/primer3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/primer3/meta.yaml>`_
   :links: biotools: :biotools:`primer3`, doi: :doi:`10.1093/nar/gks596`

   


.. conda:package:: primer3

   |downloads_primer3| |docker_primer3|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.6.1-4</code>,  <code>2.6.1-3</code>,  <code>2.6.1-2</code>,  <code>2.6.1-1</code>,  <code>2.6.1-0</code>,  <code>2.6.0-1</code>,  <code>2.6.0-0</code>,  <code>2.5.0-1</code>,  <code>2.5.0-0</code>,  </span></summary>
      

      ``2.6.1-4``,  ``2.6.1-3``,  ``2.6.1-2``,  ``2.6.1-1``,  ``2.6.1-0``,  ``2.6.0-1``,  ``2.6.0-0``,  ``2.5.0-1``,  ``2.5.0-0``,  ``2.4.1a-2``,  ``2.4.1a-1``,  ``2.4.1a-0``,  ``2.4.0-0``,  ``2.3.7-1``,  ``2.3.7-0``,  ``2.0.0a-7``,  ``2.0.0a-6``,  ``2.0.0a-5``,  ``2.0.0a-4``,  ``2.0.0a-3``,  ``2.0.0a-2``,  ``2.0.0a-1``,  ``2.0.0a-0``,  ``1.1.4-6``,  ``1.1.4-5``,  ``1.1.4-4``,  ``1.1.4-3``,  ``1.1.4-2``,  ``1.1.4-1``,  ``1.1.4-0``,  ``v2.5.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
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

      mamba install primer3

   and update with::

      mamba update primer3

  To create a new environment, run::

      mamba create --name myenvname primer3

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/primer3:<tag>

   (see `primer3/tags`_ for valid values for ``<tag>``)


.. |downloads_primer3| image:: https://img.shields.io/conda/dn/bioconda/primer3.svg?style=flat
   :target: https://anaconda.org/bioconda/primer3
   :alt:   (downloads)
.. |docker_primer3| image:: https://quay.io/repository/biocontainers/primer3/status
   :target: https://quay.io/repository/biocontainers/primer3
.. _`primer3/tags`: https://quay.io/repository/biocontainers/primer3?tab=tags


.. raw:: html

    <script>
        var package = "primer3";
        var versions = ["2.6.1","2.6.1","2.6.1","2.6.1","2.6.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/primer3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/primer3/README.html