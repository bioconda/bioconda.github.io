:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vcontact3'
.. highlight: bash

vcontact3
=========

.. conda:recipe:: vcontact3
   :replaces_section_title:
   :noindex:

   Viral Contig Automatic Clustering and Taxonomy

   :homepage: https://bitbucket.org/MAVERICLab/vcontact3
   :documentation: https://bitbucket.org/MAVERICLab/vcontact3/src/master/README.md
   
   :license: GPL / GPLv3
   :recipe: /`vcontact3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcontact3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcontact3/meta.yaml>`_

   


.. conda:package:: vcontact3

   |downloads_vcontact3| |docker_vcontact3|

   :versions:
      
      

      ``3.1.6-0``,  ``3.1.4-1``,  ``3.1.4-0``,  ``3.1.3-0``,  ``3.0.5-0``,  ``3.0.3-0``,  ``3.0.0.b74-0``,  ``3.0.0.b65-0``,  ``3.0.0.b38-0``

      

   
   :depends on biopython: ``>=1.81``
   :depends on dill: ``>=0.3.6``
   :depends on ete3: ``>=3.1.3``
   :depends on fastcluster: ``>=1.2.6,<1.3.0``
   :depends on jinja2: ``>=3.1.6``
   :depends on joblib: ``>=1.2.0``
   :depends on markupsafe: ``>=2.0.1``
   :depends on matplotlib-base: ``>=3.7.1``
   :depends on mmseqs2: ``>=15.6f452``
   :depends on networkit: ``<=11.0``
   :depends on numpy: ``>=1.23.5,<2.0.0``
   :depends on pandas: ``>=2.1.1``
   :depends on pip: 
   :depends on psutil: ``>=5.9.5``
   :depends on pyarrow: ``>=14.0.1``
   :depends on pyrodigal: ``>=2.3.0``
   :depends on pyrodigal-gv: ``>=0.3.1``
   :depends on pytables: ``>=3.8.0``
   :depends on python: ``>=3.10,<3.12``
   :depends on scikit-bio: ``>=0.5.8``
   :depends on scikit-learn: ``>=1.5.0``
   :depends on scipy: ``>=1.10.1``
   :depends on seaborn: ``>=0.12.1``
   :depends on swifter: ``>=1.3.4``
   :depends on tqdm: ``>=4.65.0``
   :depends on upsetplot: ``>=0.7.0``

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

    pixi global install vcontact3

to add into an existing workspace instead, run::

    pixi add vcontact3

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install vcontact3

Alternatively, to install into a new environment, run::

    conda create -n envname vcontact3

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/vcontact3:<tag>

(see `vcontact3/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_vcontact3| image:: https://img.shields.io/conda/dn/bioconda/vcontact3.svg?style=flat
   :target: https://anaconda.org/bioconda/vcontact3
   :alt:   (downloads)
.. |docker_vcontact3| image:: https://quay.io/repository/biocontainers/vcontact3/status
   :target: https://quay.io/repository/biocontainers/vcontact3
.. _`vcontact3/tags`: https://quay.io/repository/biocontainers/vcontact3?tab=tags


.. raw:: html

    <script>
        var package = "vcontact3";
        var versions = ["3.1.6","3.1.4","3.1.4","3.1.3","3.0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vcontact3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vcontact3/README.html