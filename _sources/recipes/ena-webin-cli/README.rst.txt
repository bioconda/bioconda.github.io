:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ena-webin-cli'
.. highlight: bash

ena-webin-cli
=============

.. conda:recipe:: ena-webin-cli
   :replaces_section_title:
   :noindex:

   Data submissions to ENA can be made using the Webin command line submission interface \(Webin\-CLI\).

   :homepage: https://github.com/enasequence/webin-cli
   :license: Apache-2.0
   :recipe: /`ena-webin-cli <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ena-webin-cli>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ena-webin-cli/meta.yaml>`_

   


.. conda:package:: ena-webin-cli

   |downloads_ena-webin-cli| |docker_ena-webin-cli|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>9.0.1-1</code>,  <code>9.0.1-0</code>,  <code>9.0.0-0</code>,  <code>8.3.0-0</code>,  <code>8.2.0-0</code>,  <code>8.1.1-1</code>,  <code>8.1.1-0</code>,  <code>8.1.0-0</code>,  <code>8.0.0-0</code>,  </span></summary>
      

      ``9.0.1-1``,  ``9.0.1-0``,  ``9.0.0-0``,  ``8.3.0-0``,  ``8.2.0-0``,  ``8.1.1-1``,  ``8.1.1-0``,  ``8.1.0-0``,  ``8.0.0-0``,  ``7.3.1-0``,  ``7.3.0-0``,  ``7.2.1-0``,  ``7.2.0-0``,  ``7.1.1-0``,  ``7.1.0-0``,  ``7.0.1-0``,  ``7.0.0-0``,  ``6.10.0-0``,  ``6.9.0-0``,  ``6.8.0-0``,  ``6.7.2-0``,  ``6.7.1-0``,  ``6.7.0-0``,  ``6.6.0-0``,  ``6.5.1-0``,  ``5.0.0-0``,  ``4.4.0-0``,  ``4.3.0-0``,  ``4.2.1-0``,  ``4.2.0-0``,  ``4.1.0-0``,  ``4.0.0-0``,  ``3.7.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends openjdk: ``>=17``
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

      mamba install ena-webin-cli

   and update with::

      mamba update ena-webin-cli

  To create a new environment, run::

      mamba create --name myenvname ena-webin-cli

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ena-webin-cli:<tag>

   (see `ena-webin-cli/tags`_ for valid values for ``<tag>``)


.. |downloads_ena-webin-cli| image:: https://img.shields.io/conda/dn/bioconda/ena-webin-cli.svg?style=flat
   :target: https://anaconda.org/bioconda/ena-webin-cli
   :alt:   (downloads)
.. |docker_ena-webin-cli| image:: https://quay.io/repository/biocontainers/ena-webin-cli/status
   :target: https://quay.io/repository/biocontainers/ena-webin-cli
.. _`ena-webin-cli/tags`: https://quay.io/repository/biocontainers/ena-webin-cli?tab=tags


.. raw:: html

    <script>
        var package = "ena-webin-cli";
        var versions = ["9.0.1","9.0.1","9.0.0","8.3.0","8.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ena-webin-cli/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ena-webin-cli/README.html