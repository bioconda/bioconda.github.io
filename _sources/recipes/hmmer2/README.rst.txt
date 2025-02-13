:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hmmer2'
.. highlight: bash

hmmer2
======

.. conda:recipe:: hmmer2
   :replaces_section_title:
   :noindex:

   Biosequence analysis using profile hidden Markov models

   :homepage: http://hmmer.org/
   :license: GPLv2
   :recipe: /`hmmer2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmmer2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmmer2/meta.yaml>`_

   


.. conda:package:: hmmer2

   |downloads_hmmer2| |docker_hmmer2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.3.2-11</code>,  <code>2.3.2-10</code>,  <code>2.3.2-9</code>,  <code>2.3.2-8</code>,  <code>2.3.2-7</code>,  <code>2.3.2-6</code>,  <code>2.3.2-5</code>,  <code>2.3.2-4</code>,  <code>2.3.2-3</code>,  </span></summary>
      

      ``2.3.2-11``,  ``2.3.2-10``,  ``2.3.2-9``,  ``2.3.2-8``,  ``2.3.2-7``,  ``2.3.2-6``,  ``2.3.2-5``,  ``2.3.2-4``,  ``2.3.2-3``,  ``2.3.2-2``,  ``2.3.2-1``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=13``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install hmmer2

   and update with::

      mamba update hmmer2

  To create a new environment, run::

      mamba create --name myenvname hmmer2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hmmer2:<tag>

   (see `hmmer2/tags`_ for valid values for ``<tag>``)


.. |downloads_hmmer2| image:: https://img.shields.io/conda/dn/bioconda/hmmer2.svg?style=flat
   :target: https://anaconda.org/bioconda/hmmer2
   :alt:   (downloads)
.. |docker_hmmer2| image:: https://quay.io/repository/biocontainers/hmmer2/status
   :target: https://quay.io/repository/biocontainers/hmmer2
.. _`hmmer2/tags`: https://quay.io/repository/biocontainers/hmmer2?tab=tags


.. raw:: html

    <script>
        var package = "hmmer2";
        var versions = ["2.3.2","2.3.2","2.3.2","2.3.2","2.3.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hmmer2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hmmer2/README.html