:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sourcepredict'
.. highlight: bash

sourcepredict
=============

.. conda:recipe:: sourcepredict
   :replaces_section_title:
   :noindex:

   Classification and prediction of the origin of metagenomic samples.

   :homepage: https://github.com/maxibor/sourcepredict
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`sourcepredict <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sourcepredict>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sourcepredict/meta.yaml>`_

   


.. conda:package:: sourcepredict

   |downloads_sourcepredict| |docker_sourcepredict|

   :versions:
      
      

      ``0.5.1-0``,  ``0.5-0``

      

   
   :depends on ete3: ``>=3.1.1``
   :depends on numpy: ``>=1.16.4``
   :depends on pandas: ``>=0.24.1``
   :depends on python: ``>=3.6``
   :depends on scikit-bio: ``>=0.5.5``
   :depends on scikit-learn: ``>=0.20.1``
   :depends on scipy: ``>=1.1.0``
   :depends on umap-learn: ``>=0.3.7``

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

    pixi global install sourcepredict

to add into an existing workspace instead, run::

    pixi add sourcepredict

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install sourcepredict

Alternatively, to install into a new environment, run::

    conda create -n envname sourcepredict

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/sourcepredict:<tag>

(see `sourcepredict/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_sourcepredict| image:: https://img.shields.io/conda/dn/bioconda/sourcepredict.svg?style=flat
   :target: https://anaconda.org/bioconda/sourcepredict
   :alt:   (downloads)
.. |docker_sourcepredict| image:: https://quay.io/repository/biocontainers/sourcepredict/status
   :target: https://quay.io/repository/biocontainers/sourcepredict
.. _`sourcepredict/tags`: https://quay.io/repository/biocontainers/sourcepredict?tab=tags


.. raw:: html

    <script>
        var package = "sourcepredict";
        var versions = ["0.5.1","0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sourcepredict/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sourcepredict/README.html