:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'igphyml'
.. highlight: bash

igphyml
=======

.. conda:recipe:: igphyml
   :replaces_section_title:
   :noindex:

   IgPhyML is a program designed to build phylogenetic trees and test evolutionary hypotheses regarding B cell affinity maturation.

   :homepage: https://igphyml.readthedocs.io/en/latest/index.html
   :license: GPL2 / GNU GPL version 2
   :recipe: /`igphyml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/igphyml>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/igphyml/meta.yaml>`_

   


.. conda:package:: igphyml

   |downloads_igphyml| |docker_igphyml|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.5-1</code>,  <code>1.1.5-0</code>,  <code>1.1.4-0</code>,  <code>1.1.3-2</code>,  <code>1.1.3-1</code>,  <code>1.1.3-0</code>,  <code>1.1.2-0</code>,  <code>1.1.1-0</code>,  <code>1.1.0-1</code>,  </span></summary>
      

      ``1.1.5-1``,  ``1.1.5-0``,  ``1.1.4-0``,  ``1.1.3-2``,  ``1.1.3-1``,  ``1.1.3-0``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.1.0-1``,  ``1.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends changeo: ``>=0.4.6``
   :depends libgcc-ng: ``>=12``
   :depends r-alakazam: ``>=0.3.0``
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

      mamba install igphyml

   and update with::

      mamba update igphyml

  To create a new environment, run::

      mamba create --name myenvname igphyml

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/igphyml:<tag>

   (see `igphyml/tags`_ for valid values for ``<tag>``)


.. |downloads_igphyml| image:: https://img.shields.io/conda/dn/bioconda/igphyml.svg?style=flat
   :target: https://anaconda.org/bioconda/igphyml
   :alt:   (downloads)
.. |docker_igphyml| image:: https://quay.io/repository/biocontainers/igphyml/status
   :target: https://quay.io/repository/biocontainers/igphyml
.. _`igphyml/tags`: https://quay.io/repository/biocontainers/igphyml?tab=tags


.. raw:: html

    <script>
        var package = "igphyml";
        var versions = ["1.1.5","1.1.5","1.1.4","1.1.3","1.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/igphyml/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/igphyml/README.html