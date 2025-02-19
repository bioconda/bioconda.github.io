:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'consent'
.. highlight: bash

consent
=======

.. conda:recipe:: consent
   :replaces_section_title:
   :noindex:

   Scalable long read self\-correction and assembly polishing with multiple sequence alignment.

   :homepage: https://github.com/morispi/CONSENT
   :documentation: https://github.com/morispi/CONSENT/blob/v2.2.2/README.md
   
   :license: AGPL / AGPL-3.0-or-later
   :recipe: /`consent <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/consent>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/consent/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41598-020-80757-5`, biotools: :biotools:`consent-correct`

   


.. conda:package:: consent

   |downloads_consent| |docker_consent|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.2.2-6</code>,  <code>2.2.2-5</code>,  <code>2.2.2-4</code>,  <code>2.2.2-3</code>,  <code>2.2.2-2</code>,  <code>2.2.2-1</code>,  <code>2.2.2-0</code>,  <code>2.2.1-0</code>,  <code>2.2-0</code>,  </span></summary>
      

      ``2.2.2-6``,  ``2.2.2-5``,  ``2.2.2-4``,  ``2.2.2-3``,  ``2.2.2-2``,  ``2.2.2-1``,  ``2.2.2-0``,  ``2.2.1-0``,  ``2.2-0``,  ``2.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx: 
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends minimap2: 
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

      mamba install consent

   and update with::

      mamba update consent

  To create a new environment, run::

      mamba create --name myenvname consent

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/consent:<tag>

   (see `consent/tags`_ for valid values for ``<tag>``)


.. |downloads_consent| image:: https://img.shields.io/conda/dn/bioconda/consent.svg?style=flat
   :target: https://anaconda.org/bioconda/consent
   :alt:   (downloads)
.. |docker_consent| image:: https://quay.io/repository/biocontainers/consent/status
   :target: https://quay.io/repository/biocontainers/consent
.. _`consent/tags`: https://quay.io/repository/biocontainers/consent?tab=tags


.. raw:: html

    <script>
        var package = "consent";
        var versions = ["2.2.2","2.2.2","2.2.2","2.2.2","2.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/consent/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/consent/README.html