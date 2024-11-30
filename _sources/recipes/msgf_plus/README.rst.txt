:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'msgf_plus'
.. highlight: bash

msgf_plus
=========

.. conda:recipe:: msgf_plus
   :replaces_section_title:
   :noindex:

   MS\-GF\+ is a MS\/MS database search tool

   :homepage: https://msgfplus.github.io/
   :license: https://github.com/msgfplus/msgfplus/blob/master/LICENSE.txt
   :recipe: /`msgf_plus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/msgf_plus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/msgf_plus/meta.yaml>`_
   :links: biotools: :biotools:`MSGFplus`, doi: :doi:`10.1038/ncomms6277`

   MS\-GF\+ is a MS\/MS database search tool that is sensitive \(it identifies more
   peptides than other database search tools and as many peptides as spectral
   library search tools\) and universal \(works well for diverse types of
   spectra\, different configurations of MS instruments and different
   experimental protocols\).



.. conda:package:: msgf_plus

   |downloads_msgf_plus| |docker_msgf_plus|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2024.03.26-0</code>,  <code>2023.01.1202-1</code>,  <code>2023.01.1202-0</code>,  <code>2022.04.18-0</code>,  <code>2022.01.07-0</code>,  <code>2021.09.06-0</code>,  <code>2021.03.22-1</code>,  <code>2021.03.22-0</code>,  <code>2021.01.08-1</code>,  </span></summary>
      

      ``2024.03.26-0``,  ``2023.01.1202-1``,  ``2023.01.1202-0``,  ``2022.04.18-0``,  ``2022.01.07-0``,  ``2021.09.06-0``,  ``2021.03.22-1``,  ``2021.03.22-0``,  ``2021.01.08-1``,  ``2021.01.08-0``,  ``2020.08.05-0``,  ``2020.06.22-0``,  ``2020.06.16-0``,  ``2020.03.14-0``,  ``2020.03.12-0``,  ``2020.01.15-0``,  ``2019.07.03-0``,  ``2019.06.28-0``,  ``2019.04.18-0``,  ``2019.02.28-3``,  ``2017.07.21-3``,  ``2017.07.21-2``,  ``2017.07.21-1``,  ``2017.07.21-0``,  ``2016.10.26-2``,  ``2016.10.26-1``,  ``2016.10.26-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends openjdk: ``>=11``
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

      mamba install msgf_plus

   and update with::

      mamba update msgf_plus

  To create a new environment, run::

      mamba create --name myenvname msgf_plus

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/msgf_plus:<tag>

   (see `msgf_plus/tags`_ for valid values for ``<tag>``)


.. |downloads_msgf_plus| image:: https://img.shields.io/conda/dn/bioconda/msgf_plus.svg?style=flat
   :target: https://anaconda.org/bioconda/msgf_plus
   :alt:   (downloads)
.. |docker_msgf_plus| image:: https://quay.io/repository/biocontainers/msgf_plus/status
   :target: https://quay.io/repository/biocontainers/msgf_plus
.. _`msgf_plus/tags`: https://quay.io/repository/biocontainers/msgf_plus?tab=tags


.. raw:: html

    <script>
        var package = "msgf_plus";
        var versions = ["2024.03.26","2023.01.1202","2023.01.1202","2022.04.18","2022.01.07"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/msgf_plus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/msgf_plus/README.html