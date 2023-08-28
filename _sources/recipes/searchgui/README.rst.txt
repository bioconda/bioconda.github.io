:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'searchgui'
.. highlight: bash

searchgui
=========

.. conda:recipe:: searchgui
   :replaces_section_title:
   :noindex:

   User\-friendly graphical tool for using proteomics identification search engines

   :homepage: https://github.com/compomics/searchgui
   :license: APACHE / Apache License 2.0
   :recipe: /`searchgui <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/searchgui>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/searchgui/meta.yaml>`_
   :links: biotools: :biotools:`searchgui`, usegalaxy-eu: :usegalaxy-eu:`search_gui`, doi: :doi:`10.1002/pmic.201000595`

   SearchGUI is a user\-friendly open\-source graphical user interface for configuring and running proteomics identification search engines\, currently supporting X\!Tandem\, MS\-GF\+\, MetaMorpheus\, MS Amanda\, MyriMatch\, Comet\, Tide\, Andromeda and OMSSA.


.. conda:package:: searchgui

   |downloads_searchgui| |docker_searchgui|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.2.17-0</code>,  <code>4.2.14-0</code>,  <code>4.2.9-0</code>,  <code>4.1.24-0</code>,  <code>4.0.41-1</code>,  <code>4.0.41-0</code>,  <code>4.0.33-0</code>,  <code>4.0.32-0</code>,  <code>4.0.25-2</code>,  </span></summary>
      

      ``4.2.17-0``,  ``4.2.14-0``,  ``4.2.9-0``,  ``4.1.24-0``,  ``4.0.41-1``,  ``4.0.41-0``,  ``4.0.33-0``,  ``4.0.32-0``,  ``4.0.25-2``,  ``4.0.25-0``,  ``4.0.22-1``,  ``4.0.22-0``,  ``4.0.12-0``,  ``4.0.7-0``,  ``4.0.4-1``,  ``4.0.4-0``,  ``4.0.1.alpha-0``,  ``3.3.10-0``,  ``3.3.9-1``,  ``3.3.9-0``,  ``3.3.6-1``,  ``3.3.5-1``,  ``3.3.3-1``,  ``3.3.1-1``,  ``3.3.1-0``,  ``3.2.26-0``,  ``3.2.24-0``,  ``3.2.20-0``,  ``3.2.13-1``,  ``3.2.13-0``,  ``3.2.11-1``,  ``3.2.11-0``,  ``3.2.8-1``,  ``3.2.8-0``,  ``3.2.7-1``,  ``3.2.7-0``,  ``3.2.6-1``,  ``3.2.6-0``,  ``3.2.5-1``,  ``3.2.5-0``,  ``3.2.3-1``,  ``3.2.3-0``,  ``3.1.4-2``,  ``3.1.4-1``,  ``3.1.4-0``,  ``2.9.0-2``,  ``2.9.0-1``,  ``2.9.0-0``,  ``2.1.4-3``,  ``2.1.4-2``,  ``2.1.4-1``,  ``2.1.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends blast: ``>=2.14.0``
   :depends fontconfig: 
   :depends fonts-conda-ecosystem: 
   :depends metamorpheus: ``1.0.2``
   :depends mono: ``>=6.0.0``
   :depends openjdk: ``>=17``
   :depends python: 
   :depends xtandem: ``15.12.15.2``
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

      mamba install searchgui

   and update with::

      mamba update searchgui

  To create a new environment, run::

      mamba create --name myenvname searchgui

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/searchgui:<tag>

   (see `searchgui/tags`_ for valid values for ``<tag>``)


.. |downloads_searchgui| image:: https://img.shields.io/conda/dn/bioconda/searchgui.svg?style=flat
   :target: https://anaconda.org/bioconda/searchgui
   :alt:   (downloads)
.. |docker_searchgui| image:: https://quay.io/repository/biocontainers/searchgui/status
   :target: https://quay.io/repository/biocontainers/searchgui
.. _`searchgui/tags`: https://quay.io/repository/biocontainers/searchgui?tab=tags


.. raw:: html

    <script>
        var package = "searchgui";
        var versions = ["4.2.17","4.2.14","4.2.9","4.1.24","4.0.41"];
    </script>





Notes
-----
SearchGUI is Java program that comes with a custom wrapper shell script. This shell wrapper is called \"opsin\" and is on \$PATH by default. By default \"\-Xms512m \-Xmx4g\" is set in the wrapper. If you want to overwrite it you can specify these values directly after your binaries. If you have \_JAVA\_OPTIONS set globally this will take precedence. For example run it with \"searchgui \-Xms512m \-Xmx8g\"


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/searchgui/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/searchgui/README.html