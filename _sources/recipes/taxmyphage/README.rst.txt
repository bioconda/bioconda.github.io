:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'taxmyphage'
.. highlight: bash

taxmyphage
==========

.. conda:recipe:: taxmyphage
   :replaces_section_title:
   :noindex:

   Script to assign taxonomy to a bacteriophage at the genus and species level

   :homepage: https://github.com/amillard/tax_myPHAGE
   :license: MIT
   :recipe: /`taxmyphage <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/taxmyphage>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/taxmyphage/meta.yaml>`_

   


.. conda:package:: taxmyphage

   |downloads_taxmyphage| |docker_taxmyphage|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.3.6-0</code>,  <code>0.3.5-0</code>,  <code>0.3.4-0</code>,  <code>0.3.3-0</code>,  <code>0.3.2-0</code>,  <code>0.3.1-0</code>,  <code>0.3.0-0</code>,  <code>0.2.9-0</code>,  <code>0.2.8-0</code>,  </span></summary>
      

      ``0.3.6-0``,  ``0.3.5-0``,  ``0.3.4-0``,  ``0.3.3-0``,  ``0.3.2-0``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.9-0``,  ``0.2.8-0``,  ``0.2.7-0``,  ``0.2.6-0``,  ``0.2.5-0``,  ``0.2.4-0``,  ``0.2.3-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.9-0``,  ``0.1.5-0``,  ``0.1.4-0``,  ``0.1.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: ``>=1.81.0,<2.0.0``
   :depends on blast: ``>=2.14.0,<3.0.0``
   :depends on icecream: ``>=2.1.3,<3.0.0``
   :depends on importlib-metadata: ``>=6.8.0,<7.0.0``
   :depends on mash: ``>=2.3,<3.0.0``
   :depends on matplotlib-base: ``>=3.8.0,<4.0.0``
   :depends on networkx: ``>=3.1.0,<4.0.0``
   :depends on numpy: ``>=1.26.0,<2.0.0``
   :depends on openpyxl: ``>=3.1.2,<4.0.0``
   :depends on pandas: ``>=2.1.1,<3.0.0``
   :depends on python: ``>=3.9,<3.13``
   :depends on python-wget: ``>=3.2.0,<4.0.0``
   :depends on scipy: ``>=1.11.3,<2.0.0``
   :depends on seaborn: ``>=0.13.0,<0.14.0``
   :depends on tqdm: ``>=4.66.1,<5.0.0``
   :depends on zipp: ``>=3.17.0,<4.0.0``

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install taxmyphage

to add into an existing workspace instead, run::

    pixi add taxmyphage

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install taxmyphage

Alternatively, to install into a new environment, run::

    conda create -n envname taxmyphage

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/taxmyphage:<tag>

(see `taxmyphage/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_taxmyphage| image:: https://img.shields.io/conda/dn/bioconda/taxmyphage.svg?style=flat
   :target: https://anaconda.org/bioconda/taxmyphage
   :alt:   (downloads)
.. |docker_taxmyphage| image:: https://quay.io/repository/biocontainers/taxmyphage/status
   :target: https://quay.io/repository/biocontainers/taxmyphage
.. _`taxmyphage/tags`: https://quay.io/repository/biocontainers/taxmyphage?tab=tags


.. raw:: html

    <script>
        var package = "taxmyphage";
        var versions = ["0.3.6","0.3.5","0.3.4","0.3.3","0.3.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/taxmyphage/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/taxmyphage/README.html