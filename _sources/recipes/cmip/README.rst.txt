:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cmip'
.. highlight: bash

cmip
====

.. conda:recipe:: cmip
   :replaces_section_title:
   :noindex:

   CMIP Classical Molecular Interaction Potentials

   :homepage: http://mmb.irbbarcelona.org/gitlab/gelpi/CMIP
   :license: APACHE / Apache Software License
   :recipe: /`cmip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cmip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cmip/meta.yaml>`_

   The latest version of the classical molecular interaction potential \(CMIP\) has the ability to predict the position of crystallographic waters in several proteins with great accuracy.


.. conda:package:: cmip

   |downloads_cmip| |docker_cmip|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.7.0-1</code>,  <code>2.7.0-0</code>,  <code>2.6.9-0</code>,  <code>2.6.8-0</code>,  <code>2.6.7-0</code>,  <code>2.6.5-0</code>,  <code>2.6.2-1</code>,  <code>2.6.2-0</code>,  <code>2.6.1-5</code>,  </span></summary>
      

      ``2.7.0-1``,  ``2.7.0-0``,  ``2.6.9-0``,  ``2.6.8-0``,  ``2.6.7-0``,  ``2.6.5-0``,  ``2.6.2-1``,  ``2.6.2-0``,  ``2.6.1-5``,  ``2.6.1-4``,  ``2.6.1-3``,  ``2.6.1-2``,  ``2.6.1-1``,  ``2.6.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends libcxx: ``>=12.0.1``
   :depends libgfortran: ``5.*``
   :depends libgfortran5: ``>=9.3.0``
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

      mamba install cmip

   and update with::

      mamba update cmip

  To create a new environment, run::

      mamba create --name myenvname cmip

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cmip:<tag>

   (see `cmip/tags`_ for valid values for ``<tag>``)


.. |downloads_cmip| image:: https://img.shields.io/conda/dn/bioconda/cmip.svg?style=flat
   :target: https://anaconda.org/bioconda/cmip
   :alt:   (downloads)
.. |docker_cmip| image:: https://quay.io/repository/biocontainers/cmip/status
   :target: https://quay.io/repository/biocontainers/cmip
.. _`cmip/tags`: https://quay.io/repository/biocontainers/cmip?tab=tags


.. raw:: html

    <script>
        var package = "cmip";
        var versions = ["2.7.0","2.7.0","2.6.9","2.6.8","2.6.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cmip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cmip/README.html