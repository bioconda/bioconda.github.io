:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ipapy2'
.. highlight: bash

ipapy2
======

.. conda:recipe:: ipapy2
   :replaces_section_title:
   :noindex:

   Integrated Probabilistic Annotation \(IPA\) 2.0 \- Python implementation

   :homepage: https://github.com/francescodc87/ipaPy2
   :license: MIT
   :recipe: /`ipapy2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ipapy2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ipapy2/meta.yaml>`_

   


.. conda:package:: ipapy2

   |downloads_ipapy2| |docker_ipapy2|

   :versions:
      
      

      ``1.3.0-0``

      

   
   :depends on molmass: ``>=2021.6.18``
   :depends on pandas: 
   :depends on python: ``>=3.8``
   :depends on scipy: ``>=1.8.1``
   :depends on tqdm: ``>=4.64.0``

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

    pixi global install ipapy2

to add into an existing workspace instead, run::

    pixi add ipapy2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ipapy2

Alternatively, to install into a new environment, run::

    conda create -n envname ipapy2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ipapy2:<tag>

(see `ipapy2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ipapy2| image:: https://img.shields.io/conda/dn/bioconda/ipapy2.svg?style=flat
   :target: https://anaconda.org/bioconda/ipapy2
   :alt:   (downloads)
.. |docker_ipapy2| image:: https://quay.io/repository/biocontainers/ipapy2/status
   :target: https://quay.io/repository/biocontainers/ipapy2
.. _`ipapy2/tags`: https://quay.io/repository/biocontainers/ipapy2?tab=tags


.. raw:: html

    <script>
        var package = "ipapy2";
        var versions = ["1.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ipapy2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ipapy2/README.html