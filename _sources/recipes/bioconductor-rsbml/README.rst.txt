:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rsbml'
.. highlight: bash

bioconductor-rsbml
==================

.. conda:recipe:: bioconductor-rsbml
   :replaces_section_title:
   :noindex:

   R support for SBML\, using libsbml

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/rsbml.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-rsbml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rsbml>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rsbml/meta.yaml>`_

   Links R to libsbml for SBML parsing\, validating output\, provides an S4 SBML DOM\, converts SBML to R graph objects. Optionally links to the SBML ODE Solver Library \(SOSLib\) for simulating models.


.. conda:package:: bioconductor-rsbml

   |downloads_bioconductor-rsbml| |docker_bioconductor-rsbml|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.60.0-0</code>,  <code>2.58.0-0</code>,  <code>2.56.0-1</code>,  <code>2.56.0-0</code>,  <code>2.52.0-2</code>,  <code>2.52.0-1</code>,  <code>2.52.0-0</code>,  <code>2.50.0-0</code>,  <code>2.48.0-1</code>,  </span></summary>
      

      ``2.60.0-0``,  ``2.58.0-0``,  ``2.56.0-1``,  ``2.56.0-0``,  ``2.52.0-2``,  ``2.52.0-1``,  ``2.52.0-0``,  ``2.50.0-0``,  ``2.48.0-1``,  ``2.48.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biocgenerics: ``>=0.48.1,<0.49.0a0``
   :depends bioconductor-graph: ``>=1.80.0,<1.81.0``
   :depends bioconductor-graph: ``>=1.80.0,<1.81.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libcxx: ``>=14``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libsbml: ``>=5.10.2``
   :depends libsbml: ``>=5.18.0,<5.19.0a0``
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-rsbml

   and update with::

      mamba update bioconductor-rsbml

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rsbml

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rsbml:<tag>

   (see `bioconductor-rsbml/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rsbml| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rsbml.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rsbml
   :alt:   (downloads)
.. |docker_bioconductor-rsbml| image:: https://quay.io/repository/biocontainers/bioconductor-rsbml/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rsbml
.. _`bioconductor-rsbml/tags`: https://quay.io/repository/biocontainers/bioconductor-rsbml?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rsbml";
        var versions = ["2.60.0","2.58.0","2.56.0","2.56.0","2.52.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rsbml/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rsbml/README.html