:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rcy3'
.. highlight: bash

bioconductor-rcy3
=================

.. conda:recipe:: bioconductor-rcy3
   :replaces_section_title:
   :noindex:

   Functions to Access and Control Cytoscape

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/RCy3.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-rcy3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rcy3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rcy3/meta.yaml>`_

   Vizualize\, analyze and explore networks using Cytoscape via R. Anything you can do using the graphical user interface of Cytoscape\, you can now do with a single RCy3 function.


.. conda:package:: bioconductor-rcy3

   |downloads_bioconductor-rcy3| |docker_bioconductor-rcy3|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.26.0-0</code>,  <code>2.22.1-0</code>,  <code>2.20.0-0</code>,  <code>2.18.0-0</code>,  <code>2.14.0-0</code>,  <code>2.12.0-0</code>,  <code>2.10.2-0</code>,  <code>2.10.0-0</code>,  <code>2.8.0-0</code>,  </span></summary>
      

      ``2.26.0-0``,  ``2.22.1-0``,  ``2.20.0-0``,  ``2.18.0-0``,  ``2.14.0-0``,  ``2.12.0-0``,  ``2.10.2-0``,  ``2.10.0-0``,  ``2.8.0-0``,  ``2.6.0-0``,  ``2.4.3-0``,  ``2.2.9-0``,  ``2.2.6-0``,  ``2.0.88-0``,  ``1.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-graph: ``>=1.84.0,<1.85.0``
   :depends cytoscape: ``>=3.7.1``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-base64enc: 
   :depends r-base64url: 
   :depends r-fs: 
   :depends r-glue: 
   :depends r-gplots: 
   :depends r-httr: 
   :depends r-irdisplay: 
   :depends r-irkernel: 
   :depends r-rcolorbrewer: 
   :depends r-rcurl: 
   :depends r-rjsonio: 
   :depends r-stringi: 
   :depends r-uuid: 
   :depends r-xml: 
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

      mamba install bioconductor-rcy3

   and update with::

      mamba update bioconductor-rcy3

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rcy3

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rcy3:<tag>

   (see `bioconductor-rcy3/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rcy3| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rcy3.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rcy3
   :alt:   (downloads)
.. |docker_bioconductor-rcy3| image:: https://quay.io/repository/biocontainers/bioconductor-rcy3/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rcy3
.. _`bioconductor-rcy3/tags`: https://quay.io/repository/biocontainers/bioconductor-rcy3?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rcy3";
        var versions = ["2.26.0","2.22.1","2.20.0","2.18.0","2.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rcy3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rcy3/README.html