:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'glimmerhmm'
.. highlight: bash

glimmerhmm
==========

.. conda:recipe:: glimmerhmm
   :replaces_section_title:
   :noindex:

   GlimmerHMM is a gene finder based on a Generalized Hidden Markov Model \(GHMM\)

   :homepage: https://ccb.jhu.edu/software/glimmerhmm/
   :license: Artistic License
   :recipe: /`glimmerhmm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/glimmerhmm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/glimmerhmm/meta.yaml>`_

   


.. conda:package:: glimmerhmm

   |downloads_glimmerhmm| |docker_glimmerhmm|

   :versions:
      
      

      ``3.0.4-8``,  ``3.0.4-7``,  ``3.0.4-5``,  ``3.0.4-3``,  ``3.0.4-2``,  ``3.0.4-1``,  ``3.0.4-0``

      

   
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

      mamba install glimmerhmm

   and update with::

      mamba update glimmerhmm

  To create a new environment, run::

      mamba create --name myenvname glimmerhmm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/glimmerhmm:<tag>

   (see `glimmerhmm/tags`_ for valid values for ``<tag>``)


.. |downloads_glimmerhmm| image:: https://img.shields.io/conda/dn/bioconda/glimmerhmm.svg?style=flat
   :target: https://anaconda.org/bioconda/glimmerhmm
   :alt:   (downloads)
.. |docker_glimmerhmm| image:: https://quay.io/repository/biocontainers/glimmerhmm/status
   :target: https://quay.io/repository/biocontainers/glimmerhmm
.. _`glimmerhmm/tags`: https://quay.io/repository/biocontainers/glimmerhmm?tab=tags


.. raw:: html

    <script>
        var package = "glimmerhmm";
        var versions = ["3.0.4","3.0.4","3.0.4","3.0.4","3.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/glimmerhmm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/glimmerhmm/README.html