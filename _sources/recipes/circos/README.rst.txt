:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'circos'
.. highlight: bash

circos
======

.. conda:recipe:: circos
   :replaces_section_title:
   :noindex:

   Circos is a software package for visualizing data and information. It visualizes data in a circular layout

   :homepage: http://circos.ca
   :license: GPL2 / GNU General Public License v2 (GPLv2)
   :recipe: /`circos <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/circos>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/circos/meta.yaml>`_
   :links: biotools: :biotools:`circos`, usegalaxy-eu: :usegalaxy-eu:`circos`, doi: :doi:`10.1101/gr.092759.109`

   


.. conda:package:: circos

   |downloads_circos| |docker_circos|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.69.9-0</code>,  <code>0.69.8-1</code>,  <code>0.69.8-0</code>,  <code>0.69.6-5</code>,  <code>0.69.6-4</code>,  <code>0.69.6-2</code>,  <code>0.69.6-1</code>,  <code>0.69.6-0</code>,  <code>0.69.5-0</code>,  </span></summary>
      

      ``0.69.9-0``,  ``0.69.8-1``,  ``0.69.8-0``,  ``0.69.6-5``,  ``0.69.6-4``,  ``0.69.6-2``,  ``0.69.6-1``,  ``0.69.6-0``,  ``0.69.5-0``,  ``0.69.4-0``,  ``0.69.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends perl: 
   :depends perl-clone: 
   :depends perl-config-general: 
   :depends perl-digest-perl-md5: 
   :depends perl-font-ttf: 
   :depends perl-gd: 
   :depends perl-list-moreutils: 
   :depends perl-math-bezier: 
   :depends perl-math-round: 
   :depends perl-math-vecstat: 
   :depends perl-params-validate: 
   :depends perl-readonly: 
   :depends perl-regexp-common: 
   :depends perl-set-intspan: 
   :depends perl-statistics-basic: 
   :depends perl-svg: 
   :depends perl-text-format: 
   :depends perl-time-hires: 
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

      mamba install circos

   and update with::

      mamba update circos

  To create a new environment, run::

      mamba create --name myenvname circos

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/circos:<tag>

   (see `circos/tags`_ for valid values for ``<tag>``)


.. |downloads_circos| image:: https://img.shields.io/conda/dn/bioconda/circos.svg?style=flat
   :target: https://anaconda.org/bioconda/circos
   :alt:   (downloads)
.. |docker_circos| image:: https://quay.io/repository/biocontainers/circos/status
   :target: https://quay.io/repository/biocontainers/circos
.. _`circos/tags`: https://quay.io/repository/biocontainers/circos?tab=tags


.. raw:: html

    <script>
        var package = "circos";
        var versions = ["0.69.9","0.69.8","0.69.8","0.69.6","0.69.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/circos/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/circos/README.html