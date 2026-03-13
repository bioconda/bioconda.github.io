:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'picrust2'
.. highlight: bash

picrust2
========

.. conda:recipe:: picrust2
   :replaces_section_title:
   :noindex:

   PICRUSt\: Phylogenetic Investigation of Communities by Reconstruction of Unobserved States

   :homepage: https://github.com/picrust/picrust2
   :license: GPL3 / GNU General Public License v3.0
   :recipe: /`picrust2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/picrust2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/picrust2/meta.yaml>`_

   


.. conda:package:: picrust2

   |downloads_picrust2| |docker_picrust2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.6.3-2</code>,  <code>2.6.3-1</code>,  <code>2.6.3-0</code>,  <code>2.6.2-1</code>,  <code>2.6.2-0</code>,  <code>2.6.1-0</code>,  <code>2.6.0-0</code>,  <code>2.5.3-0</code>,  <code>2.5.2-0</code>,  </span></summary>
      

      ``2.6.3-2``,  ``2.6.3-1``,  ``2.6.3-0``,  ``2.6.2-1``,  ``2.6.2-0``,  ``2.6.1-0``,  ``2.6.0-0``,  ``2.5.3-0``,  ``2.5.2-0``,  ``2.5.1-0``,  ``2.5.0-0``,  ``2.4.2-0``,  ``2.4.1-0``,  ``2.4.0-0``,  ``2.3.0_b-0``,  ``2.2.0_b-0``,  ``2.1.4_b-0``,  ``2.1.3_b-0``,  ``2.1.2_b-0``,  ``2.1.1_b-0``,  ``2.1.0_b-0``,  ``2.0.3_b-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biom-format: ``>=2.1.10``
   :depends on dendropy: ``>=5.0.1,<=5.0.6``
   :depends on epa-ng: ``0.3.8.*``
   :depends on ete3: 
   :depends on gappa: ``>=0.8.0,<=0.8.5``
   :depends on glpk: ``>=4.65``
   :depends on h5py: ``>=2.10.0``
   :depends on hmmer: ``>=3.1b2,<3.5.0a0``
   :depends on jinja2: ``>=2.11.3``
   :depends on joblib: ``>=1.0.1``
   :depends on numpy: ``>=1.19.5``
   :depends on pandas: ``>=1.1.5,<3.0``
   :depends on pytest: ``>=4.4.1``
   :depends on pytest-cov: ``>=2.6.1``
   :depends on python: ``>=3.5``
   :depends on r-base: ``>=3.5.1``
   :depends on r-castor: ``>=1.7.2``
   :depends on scipy: ``>=1.2.1``
   :depends on sepp: ``4.5.5.*``
   :depends on wget: 

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

    pixi global install picrust2

to add into an existing workspace instead, run::

    pixi add picrust2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install picrust2

Alternatively, to install into a new environment, run::

    conda create -n envname picrust2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/picrust2:<tag>

(see `picrust2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_picrust2| image:: https://img.shields.io/conda/dn/bioconda/picrust2.svg?style=flat
   :target: https://anaconda.org/bioconda/picrust2
   :alt:   (downloads)
.. |docker_picrust2| image:: https://quay.io/repository/biocontainers/picrust2/status
   :target: https://quay.io/repository/biocontainers/picrust2
.. _`picrust2/tags`: https://quay.io/repository/biocontainers/picrust2?tab=tags


.. raw:: html

    <script>
        var package = "picrust2";
        var versions = ["2.6.3","2.6.3","2.6.3","2.6.2","2.6.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/picrust2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/picrust2/README.html