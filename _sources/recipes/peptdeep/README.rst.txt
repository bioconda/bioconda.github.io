:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'peptdeep'
.. highlight: bash

peptdeep
========

.. conda:recipe:: peptdeep
   :replaces_section_title:
   :noindex:

   The AlphaX deep learning framework for Proteomics

   :homepage: https://github.com/MannLabs/alphapeptdeep
   :documentation: https://alphapeptdeep.readthedocs.io/en/latest/
   
   :license: APACHE / Apache-2.0
   :recipe: /`peptdeep <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/peptdeep>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/peptdeep/meta.yaml>`_

   PeptDeep provides deep learning models for mass spectrometry\-based
   proteomics. It includes built\-in models for predicting retention time\,
   collision cross section\, and tandem mass spectra for peptides\, enabling
   users to generate predicted spectral libraries from protein sequences.



.. conda:package:: peptdeep

   |downloads_peptdeep| |docker_peptdeep|

   :versions:
      
      

      ``1.4.2-0``,  ``1.4.1-1``,  ``1.4.1-0``

      

   
   :depends on alphabase: ``>=1.5.0``
   :depends on alpharaw: ``>=0.2.0``
   :depends on click: 
   :depends on lxml: 
   :depends on numba: 
   :depends on numpy: ``<2``
   :depends on pandas: ``<3.0``
   :depends on psutil: 
   :depends on pyteomics: 
   :depends on python: ``>=3.8``
   :depends on pytorch: 
   :depends on scikit-learn: 
   :depends on tqdm: 
   :depends on transformers: 

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

    pixi global install peptdeep

to add into an existing workspace instead, run::

    pixi add peptdeep

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install peptdeep

Alternatively, to install into a new environment, run::

    conda create -n envname peptdeep

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/peptdeep:<tag>

(see `peptdeep/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_peptdeep| image:: https://img.shields.io/conda/dn/bioconda/peptdeep.svg?style=flat
   :target: https://anaconda.org/bioconda/peptdeep
   :alt:   (downloads)
.. |docker_peptdeep| image:: https://quay.io/repository/biocontainers/peptdeep/status
   :target: https://quay.io/repository/biocontainers/peptdeep
.. _`peptdeep/tags`: https://quay.io/repository/biocontainers/peptdeep?tab=tags


.. raw:: html

    <script>
        var package = "peptdeep";
        var versions = ["1.4.2","1.4.1","1.4.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/peptdeep/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/peptdeep/README.html