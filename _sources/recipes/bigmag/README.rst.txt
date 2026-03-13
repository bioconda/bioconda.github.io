:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bigmag'
.. highlight: bash

bigmag
======

.. conda:recipe:: bigmag
   :replaces_section_title:
   :noindex:

   BIgMAG\: dashboard for extracting insights from MAG quality metrics

   :homepage: https://github.com/jeffe107/BIgMAG
   :license: MIT / MIT
   :recipe: /`bigmag <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bigmag>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bigmag/meta.yaml>`_
   :links: doi: :doi:`10.12688/f1000research.152290.2`

   


.. conda:package:: bigmag

   |downloads_bigmag| |docker_bigmag|

   :versions:
      
      

      ``1.1.0-0``

      

   
   :depends on dash: 
   :depends on dash-bio: 
   :depends on dash-bootstrap-components: 
   :depends on dash-daq: 
   :depends on gunicorn: 
   :depends on numpy: ``<2``
   :depends on pandas: 
   :depends on pingouin: 
   :depends on plotly: 
   :depends on python: ``>=3.9,<3.12``
   :depends on scikit-posthocs: 
   :depends on scipy: 

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

    pixi global install bigmag

to add into an existing workspace instead, run::

    pixi add bigmag

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bigmag

Alternatively, to install into a new environment, run::

    conda create -n envname bigmag

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bigmag:<tag>

(see `bigmag/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bigmag| image:: https://img.shields.io/conda/dn/bioconda/bigmag.svg?style=flat
   :target: https://anaconda.org/bioconda/bigmag
   :alt:   (downloads)
.. |docker_bigmag| image:: https://quay.io/repository/biocontainers/bigmag/status
   :target: https://quay.io/repository/biocontainers/bigmag
.. _`bigmag/tags`: https://quay.io/repository/biocontainers/bigmag?tab=tags


.. raw:: html

    <script>
        var package = "bigmag";
        var versions = ["1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bigmag/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bigmag/README.html