:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-typeinfo'
.. highlight: bash

bioconductor-typeinfo
=====================

.. conda:recipe:: bioconductor-typeinfo
   :replaces_section_title:
   :noindex:

   Optional Type Specification Prototype

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/TypeInfo.html
   :license: BSD_2_clause
   :recipe: /`bioconductor-typeinfo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-typeinfo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-typeinfo/meta.yaml>`_

   A prototype for a mechanism for specifying the types of parameters and the return value for an R function. This is meta\-information that can be used to generate stubs for servers and various interfaces to these functions. Additionally\, the arguments in a call to a typed function can be validated using the type specifications. We allow types to be specified as either i\) by class name using either inheritance \- is\(x\, className\)\, or strict instance of \- class\(x\) \%in\% className\, or ii\) a dynamic test given as an R expression which is evaluated at run\-time. More precise information and interesting tests can be done via ii\)\, but it is harder to use this information as meta\-data as it requires more effort to interpret it and it is of course run\-time information. It is typically more meaningful.


.. conda:package:: bioconductor-typeinfo

   |downloads_bioconductor-typeinfo| |docker_bioconductor-typeinfo|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.68.0-0</code>,  <code>1.66.0-0</code>,  <code>1.64.0-0</code>,  <code>1.60.0-0</code>,  <code>1.58.0-0</code>,  <code>1.56.0-1</code>,  <code>1.56.0-0</code>,  <code>1.54.0-0</code>,  <code>1.52.0-0</code>,  </span></summary>
      

      ``1.68.0-0``,  ``1.66.0-0``,  ``1.64.0-0``,  ``1.60.0-0``,  ``1.58.0-0``,  ``1.56.0-1``,  ``1.56.0-0``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-1``,  ``1.50.0-0``,  ``1.48.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-typeinfo

   and update with::

      mamba update bioconductor-typeinfo

  To create a new environment, run::

      mamba create --name myenvname bioconductor-typeinfo

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-typeinfo:<tag>

   (see `bioconductor-typeinfo/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-typeinfo| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-typeinfo.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-typeinfo
   :alt:   (downloads)
.. |docker_bioconductor-typeinfo| image:: https://quay.io/repository/biocontainers/bioconductor-typeinfo/status
   :target: https://quay.io/repository/biocontainers/bioconductor-typeinfo
.. _`bioconductor-typeinfo/tags`: https://quay.io/repository/biocontainers/bioconductor-typeinfo?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-typeinfo";
        var versions = ["1.68.0","1.66.0","1.64.0","1.60.0","1.58.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-typeinfo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-typeinfo/README.html