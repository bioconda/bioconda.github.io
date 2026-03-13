:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'deeplc'
.. highlight: bash

deeplc
======

.. conda:recipe:: deeplc
   :replaces_section_title:
   :noindex:

   DeepLC\: Retention time prediction for \(modified\) peptides using Deep Learning.

   :homepage: https://compomics.github.io/projects/DeepLC
   :documentation: https://github.com/compomics/DeepLC/blob/v3.1.13/README.md
   
   :developer docs: https://github.com/compomics/DeepLC
   :license: APACHE / Apache-2.0
   :recipe: /`deeplc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deeplc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deeplc/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41592-021-01301-5`, biotools: :biotools:`deeplc`

   


.. conda:package:: deeplc

   |downloads_deeplc| |docker_deeplc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.1.13-0</code>,  <code>3.1.10-0</code>,  <code>3.1.9-0</code>,  <code>3.1.8-0</code>,  <code>3.1.7-0</code>,  <code>3.1.5-0</code>,  <code>3.1.3-0</code>,  <code>3.0.8-0</code>,  <code>3.0.7-0</code>,  </span></summary>
      

      ``3.1.13-0``,  ``3.1.10-0``,  ``3.1.9-0``,  ``3.1.8-0``,  ``3.1.7-0``,  ``3.1.5-0``,  ``3.1.3-0``,  ``3.0.8-0``,  ``3.0.7-0``,  ``3.0.6-0``,  ``3.0.4-0``,  ``3.0.2-0``,  ``2.2.38-0``,  ``2.2.36-0``,  ``2.2.27-0``,  ``2.2.26-0``,  ``2.2.22-0``,  ``2.2.20-0``,  ``2.2.18-0``,  ``2.2.14-0``,  ``2.2.12-0``,  ``2.2.9-0``,  ``2.2.7-0``,  ``2.2.6-0``,  ``2.2.5-0``,  ``2.2.4-0``,  ``2.2.3-0``,  ``2.2.2-0``,  ``2.2.1-0``,  ``2.2.0-0``,  ``2.1.9-0``,  ``2.1.8-0``,  ``1.1.2-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.36-0``,  ``0.1.35-0``,  ``0.1.34-0``,  ``0.1.33-0``,  ``0.1.31-0``,  ``0.1.30-0``,  ``0.1.29-0``,  ``0.1.16-0``,  ``0.1.15-0``,  ``0.1.14-0``,  ``0.1.13-0``,  ``0.1.12-0``,  ``0.1.11-0``,  ``0.1.10-0``,  ``0.1.7-0``,  ``0.1.6-0``,  ``0.1.4-0``,  ``0.1.2-0``,  ``0.1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on deeplcretrainer: ``>=1,<2``
   :depends on numpy: ``>=1.17,<3``
   :depends on pandas: ``>=0.25,<3``
   :depends on psm-utils: ``>=1,<2``
   :depends on python: ``>=3.9``
   :depends on scikit-learn: ``>=1.2.0,<2``
   :depends on tensorflow: ``>=2.15.0,<3``

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

    pixi global install deeplc

to add into an existing workspace instead, run::

    pixi add deeplc

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install deeplc

Alternatively, to install into a new environment, run::

    conda create -n envname deeplc

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/deeplc:<tag>

(see `deeplc/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_deeplc| image:: https://img.shields.io/conda/dn/bioconda/deeplc.svg?style=flat
   :target: https://anaconda.org/bioconda/deeplc
   :alt:   (downloads)
.. |docker_deeplc| image:: https://quay.io/repository/biocontainers/deeplc/status
   :target: https://quay.io/repository/biocontainers/deeplc
.. _`deeplc/tags`: https://quay.io/repository/biocontainers/deeplc?tab=tags


.. raw:: html

    <script>
        var package = "deeplc";
        var versions = ["3.1.13","3.1.10","3.1.9","3.1.8","3.1.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/deeplc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/deeplc/README.html