:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nordic'
.. highlight: bash

nordic
======

.. conda:recipe:: nordic
   :replaces_section_title:
   :noindex:

   NORDic\: a Network\-Oriented package for the Repurposing of Drugs

   :homepage: https://github.com/clreda/NORDic
   :documentation: https://github.com/clreda/NORDic/blob/main/README.md
   
   :license: MIT / MIT
   :recipe: /`nordic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nordic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nordic/meta.yaml>`_
   :links: doi: :doi:`10.5281/zenodo.7239047`

   


.. conda:package:: nordic

   |downloads_nordic| |docker_nordic|

   :versions:
      
      

      ``2.7.1-0``,  ``2.7.0-0``,  ``2.6.0-0``,  ``2.5.0-1``,  ``2.5.0-0``,  ``2.4.4-0``

      

   
   :depends on clingo: ``>=5.6.1``
   :depends on cmappy: ``>=4.0.1``
   :depends on cmappy: ``>=4.0.1,<5.0a0``
   :depends on graphviz: ``>=0.20.1``
   :depends on graphviz: ``>=13.1.2,<14.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on matplotlib-base: 
   :depends on numpy: ``>=1.21,<3``
   :depends on numpy: ``>=1.22.4,!=2.0.*,!=2.1.*``
   :depends on omnipath: 
   :depends on openpyxl: ``>=3.0.10``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on qnorm: ``>=0.5.1``
   :depends on quadprog: ``>=0.1.11``
   :depends on scikit-learn: ``>=1.1.2``
   :depends on scipy: ``>=1.6.2``
   :depends on seaborn: ``>=0.12.1``
   :depends on tqdm: ``>=4.62.3``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

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

    pixi global install nordic

to add into an existing workspace instead, run::

    pixi add nordic

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install nordic

Alternatively, to install into a new environment, run::

    conda create -n envname nordic

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/nordic:<tag>

(see `nordic/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_nordic| image:: https://img.shields.io/conda/dn/bioconda/nordic.svg?style=flat
   :target: https://anaconda.org/bioconda/nordic
   :alt:   (downloads)
.. |docker_nordic| image:: https://quay.io/repository/biocontainers/nordic/status
   :target: https://quay.io/repository/biocontainers/nordic
.. _`nordic/tags`: https://quay.io/repository/biocontainers/nordic?tab=tags


.. raw:: html

    <script>
        var package = "nordic";
        var versions = ["2.7.1","2.7.0","2.6.0","2.5.0","2.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nordic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nordic/README.html