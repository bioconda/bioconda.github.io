:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'checkqc'
.. highlight: bash

checkqc
=======

.. conda:recipe:: checkqc
   :replaces_section_title:
   :noindex:

   A simple program to parse Illumina NGS data and check it for quality criteria.

   :homepage: https://www.github.com/Molmed/checkQC
   :documentation: https://checkqc.readthedocs.io/en/latest/
   
   :license: GPL3 / GPLv3
   :recipe: /`checkqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/checkqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/checkqc/meta.yaml>`_

   


.. conda:package:: checkqc

   |downloads_checkqc| |docker_checkqc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.0.7-0</code>,  <code>4.0.6-0</code>,  <code>4.0.5-0</code>,  <code>4.0.4-0</code>,  <code>4.0.1-0</code>,  <code>3.8.2-1</code>,  <code>3.8.2-0</code>,  <code>3.8.1-0</code>,  <code>3.8.0-0</code>,  </span></summary>
      

      ``4.0.7-0``,  ``4.0.6-0``,  ``4.0.5-0``,  ``4.0.4-0``,  ``4.0.1-0``,  ``3.8.2-1``,  ``3.8.2-0``,  ``3.8.1-0``,  ``3.8.0-0``,  ``3.7.0-0``,  ``3.6.6-0``,  ``3.6.5-0``,  ``3.6.4-0``,  ``3.6.3-0``,  ``3.6.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on click: ``>=8.1.1``
   :depends on illumina-interop: ``>=1.2.4``
   :depends on jsonschema: 
   :depends on numpy: ``>=1.26.4``
   :depends on pandas: ``>=2.2.2``
   :depends on python: ``>=3.6,<3.11``
   :depends on pyyaml: ``>=6.0``
   :depends on sample-sheet: ``>=0.13.0``
   :depends on tornado: ``>=6.3.2``
   :depends on xmltodict: ``>=0.13.0``

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

    pixi global install checkqc

to add into an existing workspace instead, run::

    pixi add checkqc

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install checkqc

Alternatively, to install into a new environment, run::

    conda create -n envname checkqc

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/checkqc:<tag>

(see `checkqc/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_checkqc| image:: https://img.shields.io/conda/dn/bioconda/checkqc.svg?style=flat
   :target: https://anaconda.org/bioconda/checkqc
   :alt:   (downloads)
.. |docker_checkqc| image:: https://quay.io/repository/biocontainers/checkqc/status
   :target: https://quay.io/repository/biocontainers/checkqc
.. _`checkqc/tags`: https://quay.io/repository/biocontainers/checkqc?tab=tags


.. raw:: html

    <script>
        var package = "checkqc";
        var versions = ["4.0.7","4.0.6","4.0.5","4.0.4","4.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/checkqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/checkqc/README.html