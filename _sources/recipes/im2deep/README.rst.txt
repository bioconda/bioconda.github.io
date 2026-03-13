:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'im2deep'
.. highlight: bash

im2deep
=======

.. conda:recipe:: im2deep
   :replaces_section_title:
   :noindex:

   Framework for prediction of collisional cross\-section of peptides.

   :homepage: https://github.com/compomics/im2deep
   :license: APACHE / Apache-2.0
   :recipe: /`im2deep <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/im2deep>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/im2deep/meta.yaml>`_

   


.. conda:package:: im2deep

   |downloads_im2deep| |docker_im2deep|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.0-0</code>,  <code>1.1.1-0</code>,  <code>1.1.0-0</code>,  <code>1.0.3-0</code>,  <code>1.0.2-0</code>,  <code>1.0.1-0</code>,  <code>0.3.1-1</code>,  <code>0.3.1-0</code>,  <code>0.2.0-0</code>,  </span></summary>
      

      ``1.2.0-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``0.3.1-1``,  ``0.3.1-0``,  ``0.2.0-0``,  ``0.1.9-0``,  ``0.1.8-0``,  ``0.1.7-0``,  ``0.1.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on click: 
   :depends on deeplc: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on psm-utils: 
   :depends on python: ``>=3.8``
   :depends on rich: 

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

    pixi global install im2deep

to add into an existing workspace instead, run::

    pixi add im2deep

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install im2deep

Alternatively, to install into a new environment, run::

    conda create -n envname im2deep

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/im2deep:<tag>

(see `im2deep/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_im2deep| image:: https://img.shields.io/conda/dn/bioconda/im2deep.svg?style=flat
   :target: https://anaconda.org/bioconda/im2deep
   :alt:   (downloads)
.. |docker_im2deep| image:: https://quay.io/repository/biocontainers/im2deep/status
   :target: https://quay.io/repository/biocontainers/im2deep
.. _`im2deep/tags`: https://quay.io/repository/biocontainers/im2deep?tab=tags


.. raw:: html

    <script>
        var package = "im2deep";
        var versions = ["1.2.0","1.1.1","1.1.0","1.0.3","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/im2deep/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/im2deep/README.html