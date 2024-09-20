:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phykit'
.. highlight: bash

phykit
======

.. conda:recipe:: phykit
   :replaces_section_title:
   :noindex:

   PhyKIT is a UNIX shell toolkit for processing and analyzing phylogenomic data.

   :homepage: https://github.com/jlsteenwyk/phykit
   :documentation: https://jlsteenwyk.com/PhyKIT
   
   :license: MIT / MIT
   :recipe: /`phykit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phykit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phykit/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btab096`, biotools: :biotools:`phykit`

   


.. conda:package:: phykit

   |downloads_phykit| |docker_phykit|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.0-0</code>,  <code>1.20.0-0</code>,  <code>1.19.9-0</code>,  <code>1.19.8-0</code>,  <code>1.19.6-0</code>,  <code>1.19.5-0</code>,  <code>1.19.4-0</code>,  <code>1.19.3-0</code>,  <code>1.19.2-0</code>,  </span></summary>
      

      ``2.0.0-0``,  ``1.20.0-0``,  ``1.19.9-0``,  ``1.19.8-0``,  ``1.19.6-0``,  ``1.19.5-0``,  ``1.19.4-0``,  ``1.19.3-0``,  ``1.19.2-0``,  ``1.19.1-0``,  ``1.19.0-0``,  ``1.17.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.13.1-0``,  ``1.13.0-0``,  ``1.12.5-0``,  ``1.12.4-0``,  ``1.12.3-0``,  ``1.12.2-0``,  ``1.12.0-0``,  ``1.11.16-0``,  ``1.11.15-0``,  ``1.11.14-0``,  ``1.11.13-0``,  ``1.11.12-0``,  ``1.11.10-0``,  ``1.11.7-0``,  ``1.11.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: ``>=1.81``
   :depends numpy: ``>=1.24.0``
   :depends python: ``>=3``
   :depends scikit-learn: ``>=1.4.2``
   :depends scipy: ``>=1.11.3``
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

      mamba install phykit

   and update with::

      mamba update phykit

  To create a new environment, run::

      mamba create --name myenvname phykit

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/phykit:<tag>

   (see `phykit/tags`_ for valid values for ``<tag>``)


.. |downloads_phykit| image:: https://img.shields.io/conda/dn/bioconda/phykit.svg?style=flat
   :target: https://anaconda.org/bioconda/phykit
   :alt:   (downloads)
.. |docker_phykit| image:: https://quay.io/repository/biocontainers/phykit/status
   :target: https://quay.io/repository/biocontainers/phykit
.. _`phykit/tags`: https://quay.io/repository/biocontainers/phykit?tab=tags


.. raw:: html

    <script>
        var package = "phykit";
        var versions = ["2.0.0","1.20.0","1.19.9","1.19.8","1.19.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phykit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phykit/README.html