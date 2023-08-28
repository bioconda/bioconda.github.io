:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'jamm'
.. highlight: bash

jamm
====

.. conda:recipe:: jamm
   :replaces_section_title:
   :noindex:

   JAMM is a peak finder for NGS datasets \(ChIP\-Seq\, ATAC\-Seq\, DNase\-Seq..etc.\) that can integrate replicates and assign peak boundaries accurately.

   :homepage: https://github.com/mahmoudibrahim/JAMM
   :license: GPL
   :recipe: /`jamm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jamm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jamm/meta.yaml>`_

   


.. conda:package:: jamm

   |downloads_jamm| |docker_jamm|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.8.0-1</code>,  <code>1.0.8.0-0</code>,  <code>1.0.7.6-0</code>,  <code>1.0.7.5-2</code>,  <code>1.0.7.5-1</code>,  <code>1.0.7.5-0</code>,  <code>1.0.7.4-0</code>,  <code>1.0.7.2-3</code>,  <code>1.0.7.2-2</code>,  </span></summary>
      

      ``1.0.8.0-1``,  ``1.0.8.0-0``,  ``1.0.7.6-0``,  ``1.0.7.5-2``,  ``1.0.7.5-1``,  ``1.0.7.5-0``,  ``1.0.7.4-0``,  ``1.0.7.2-3``,  ``1.0.7.2-2``,  ``1.0.7.2-1``,  ``1.0.7.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends gawk: 
   :depends perl: 
   :depends r-mclust: ``>=5.3``
   :depends r-signal: 
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

      mamba install jamm

   and update with::

      mamba update jamm

  To create a new environment, run::

      mamba create --name myenvname jamm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/jamm:<tag>

   (see `jamm/tags`_ for valid values for ``<tag>``)


.. |downloads_jamm| image:: https://img.shields.io/conda/dn/bioconda/jamm.svg?style=flat
   :target: https://anaconda.org/bioconda/jamm
   :alt:   (downloads)
.. |docker_jamm| image:: https://quay.io/repository/biocontainers/jamm/status
   :target: https://quay.io/repository/biocontainers/jamm
.. _`jamm/tags`: https://quay.io/repository/biocontainers/jamm?tab=tags


.. raw:: html

    <script>
        var package = "jamm";
        var versions = ["1.0.8.0","1.0.8.0","1.0.7.6","1.0.7.5","1.0.7.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/jamm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/jamm/README.html