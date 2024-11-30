:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mummer4'
.. highlight: bash

mummer4
=======

.. conda:recipe:: mummer4
   :replaces_section_title:
   :noindex:

   MUMmer is a system for rapidly aligning entire genomes

   :homepage: https://mummer4.github.io/
   :license: The Artistic License 2.0
   :recipe: /`mummer4 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mummer4>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mummer4/meta.yaml>`_

   


.. conda:package:: mummer4

   |downloads_mummer4| |docker_mummer4|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.0.0rc1-7</code>,  <code>4.0.0rc1-6</code>,  <code>4.0.0rc1-5</code>,  <code>4.0.0rc1-4</code>,  <code>4.0.0rc1-3</code>,  <code>4.0.0rc1-2</code>,  <code>4.0.0rc1-1</code>,  <code>4.0.0rc1-0</code>,  <code>4.0.0beta2-5</code>,  </span></summary>
      

      ``4.0.0rc1-7``,  ``4.0.0rc1-6``,  ``4.0.0rc1-5``,  ``4.0.0rc1-4``,  ``4.0.0rc1-3``,  ``4.0.0rc1-2``,  ``4.0.0rc1-1``,  ``4.0.0rc1-0``,  ``4.0.0beta2-5``,  ``4.0.0beta2-4``,  ``4.0.0beta2-3``,  ``4.0.0beta2-2``,  ``4.0.0beta2-1``,  ``4.0.0beta2-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
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

      mamba install mummer4

   and update with::

      mamba update mummer4

  To create a new environment, run::

      mamba create --name myenvname mummer4

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mummer4:<tag>

   (see `mummer4/tags`_ for valid values for ``<tag>``)


.. |downloads_mummer4| image:: https://img.shields.io/conda/dn/bioconda/mummer4.svg?style=flat
   :target: https://anaconda.org/bioconda/mummer4
   :alt:   (downloads)
.. |docker_mummer4| image:: https://quay.io/repository/biocontainers/mummer4/status
   :target: https://quay.io/repository/biocontainers/mummer4
.. _`mummer4/tags`: https://quay.io/repository/biocontainers/mummer4?tab=tags


.. raw:: html

    <script>
        var package = "mummer4";
        var versions = ["4.0.0rc1","4.0.0rc1","4.0.0rc1","4.0.0rc1","4.0.0rc1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mummer4/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mummer4/README.html