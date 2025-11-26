:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rfmix'
.. highlight: bash

rfmix
=====

.. conda:recipe:: rfmix
   :replaces_section_title:
   :noindex:

   RFMix implements a fast discriminative approach to modeling ancestry along an admixed chromosome given observed haplotype sequences of known or inferred ancestry.

   :homepage: https://github.com/slowkoni/rfmix
   :license: Free for Academic Use
   :recipe: /`rfmix <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rfmix>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rfmix/meta.yaml>`_
   :links: biotools: :biotools:`RFMix`, doi: :doi:`10.1016/j.ajhg.2013.06.020`

   


.. conda:package:: rfmix

   |downloads_rfmix| |docker_rfmix|

   :versions:
      
      

      ``2.03.r0.9505bfa-8``,  ``2.03.r0.9505bfa-7``,  ``2.03.r0.9505bfa-6``,  ``2.03.r0.9505bfa-5``,  ``2.03.r0.9505bfa-4``,  ``2.03.r0.9505bfa-3``,  ``2.03.r0.9505bfa-2``,  ``2.03.r0.9505bfa-1``,  ``2.03.r0.9505bfa-0``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends pthread-stubs: 
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install rfmix

   and update with::

      mamba update rfmix

  To create a new environment, run::

      mamba create --name myenvname rfmix

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rfmix:<tag>

   (see `rfmix/tags`_ for valid values for ``<tag>``)


.. |downloads_rfmix| image:: https://img.shields.io/conda/dn/bioconda/rfmix.svg?style=flat
   :target: https://anaconda.org/bioconda/rfmix
   :alt:   (downloads)
.. |docker_rfmix| image:: https://quay.io/repository/biocontainers/rfmix/status
   :target: https://quay.io/repository/biocontainers/rfmix
.. _`rfmix/tags`: https://quay.io/repository/biocontainers/rfmix?tab=tags


.. raw:: html

    <script>
        var package = "rfmix";
        var versions = ["2.03.r0.9505bfa","2.03.r0.9505bfa","2.03.r0.9505bfa","2.03.r0.9505bfa","2.03.r0.9505bfa"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rfmix/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rfmix/README.html