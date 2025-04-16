:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gcluster'
.. highlight: bash

gcluster
========

.. conda:recipe:: gcluster
   :replaces_section_title:
   :noindex:

   Gcluster is a simple\-to\-use tool for visualizing and comparing genome contexts for numerous genomes.

   :homepage: https://www.microbialgenomic.cn/Gcluster_tool.html
   :documentation: https://github.com/Xiangyang1984/Gcluster
   
   :license: GNU General Public License v3.0 or any later version (GPL-3.0-or-later)
   :recipe: /`gcluster <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gcluster>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gcluster/meta.yaml>`_

   Gcluster is a stand\-alone Perl application\, which requires MCL\, NCBI BLAST\+ and several Perl Modules \(GD\, GD\:\:SVG\) to be installed before use.


.. conda:package:: gcluster

   |downloads_gcluster| |docker_gcluster|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.06-2</code>,  <code>2.06-0</code>,  <code>2.0.7-0</code>,  <code>2.0.5-1</code>,  <code>2.0.5-0</code>,  <code>2.0.4-0</code>,  <code>2.0.3-0</code>,  <code>2.0.2-0</code>,  <code>2.0.1-1</code>,  </span></summary>
      

      ``2.06-2``,  ``2.06-0``,  ``2.0.7-0``,  ``2.0.5-1``,  ``2.0.5-0``,  ``2.0.4-0``,  ``2.0.3-0``,  ``2.0.2-0``,  ``2.0.1-1``,  ``2.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends blast: 
   :depends mcl: 
   :depends perl-bioperl-core: 
   :depends perl-gd: 
   :depends perl-gd-svg: 
   :depends perl-svg: 
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

      mamba install gcluster

   and update with::

      mamba update gcluster

  To create a new environment, run::

      mamba create --name myenvname gcluster

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gcluster:<tag>

   (see `gcluster/tags`_ for valid values for ``<tag>``)


.. |downloads_gcluster| image:: https://img.shields.io/conda/dn/bioconda/gcluster.svg?style=flat
   :target: https://anaconda.org/bioconda/gcluster
   :alt:   (downloads)
.. |docker_gcluster| image:: https://quay.io/repository/biocontainers/gcluster/status
   :target: https://quay.io/repository/biocontainers/gcluster
.. _`gcluster/tags`: https://quay.io/repository/biocontainers/gcluster?tab=tags


.. raw:: html

    <script>
        var package = "gcluster";
        var versions = ["2.06","2.06","2.0.7","2.0.5","2.0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gcluster/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gcluster/README.html