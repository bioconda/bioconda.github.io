:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rnaz'
.. highlight: bash

rnaz
====

.. conda:recipe:: rnaz
   :replaces_section_title:
   :noindex:

   predicting structural noncoding RNAs

   :homepage: https://www.tbi.univie.ac.at/~wash/RNAz/
   :license: MIT-like
   :recipe: /`rnaz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnaz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnaz/meta.yaml>`_
   :links: biotools: :biotools:`rnaz`

   


.. conda:package:: rnaz

   |downloads_rnaz| |docker_rnaz|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.1.1-6</code>,  <code>2.1.1-5</code>,  <code>2.1.1-4</code>,  <code>2.1.1-3</code>,  <code>2.1.1-2</code>,  <code>2.1.1-1</code>,  <code>2.1.1-0</code>,  <code>2.1-4</code>,  <code>2.1-3</code>,  </span></summary>
      

      ``2.1.1-6``,  ``2.1.1-5``,  ``2.1.1-4``,  ``2.1.1-3``,  ``2.1.1-2``,  ``2.1.1-1``,  ``2.1.1-0``,  ``2.1-4``,  ``2.1-3``,  ``2.1-2``,  ``2.1-1``,  ``2.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install rnaz

   and update with::

      mamba update rnaz

  To create a new environment, run::

      mamba create --name myenvname rnaz

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rnaz:<tag>

   (see `rnaz/tags`_ for valid values for ``<tag>``)


.. |downloads_rnaz| image:: https://img.shields.io/conda/dn/bioconda/rnaz.svg?style=flat
   :target: https://anaconda.org/bioconda/rnaz
   :alt:   (downloads)
.. |docker_rnaz| image:: https://quay.io/repository/biocontainers/rnaz/status
   :target: https://quay.io/repository/biocontainers/rnaz
.. _`rnaz/tags`: https://quay.io/repository/biocontainers/rnaz?tab=tags


.. raw:: html

    <script>
        var package = "rnaz";
        var versions = ["2.1.1","2.1.1","2.1.1","2.1.1","2.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rnaz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rnaz/README.html