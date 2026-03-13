:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'crisprhawk'
.. highlight: bash

crisprhawk
==========

.. conda:recipe:: crisprhawk
   :replaces_section_title:
   :noindex:

   CRISPR\-HAWK\: Haplotype and vAriant\-aWare guide design toolKit

   :homepage: https://github.com/pinellolab/CRISPR-HAWK
   :license: AGPL-3.0-or-later AND BSD-3-Clause
   :recipe: /`crisprhawk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crisprhawk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crisprhawk/meta.yaml>`_

   


.. conda:package:: crisprhawk

   |downloads_crisprhawk| |docker_crisprhawk|

   :versions:
      
      

      ``0.1.2-0``

      

   
   :depends on biopython: ``1.83.*``
   :depends on charset-normalizer: ``3.3.2.*``
   :depends on colorama: ``0.4.6.*``
   :depends on contourpy: ``1.1.1.*``
   :depends on cycler: ``0.12.1.*``
   :depends on exceptiongroup: ``1.2.2.*``
   :depends on filelock: ``3.16.1.*``
   :depends on fonttools: ``4.53.1.*``
   :depends on fsspec: ``2024.10.0.*``
   :depends on gmpy2: ``2.1.5.*``
   :depends on h5py: ``3.7.0.*``
   :depends on idna: ``3.10.*``
   :depends on iniconfig: ``2.0.0.*``
   :depends on jinja2: ``3.1.4.*``
   :depends on joblib: ``1.4.2.*``
   :depends on kiwisolver: ``1.4.5.*``
   :depends on lightgbm: ``3.3.5.*``
   :depends on markupsafe: ``2.1.5.*``
   :depends on matplotlib-base: ``3.5.3.*``
   :depends on mpmath: ``1.3.0.*``
   :depends on munkres: ``1.1.4.*``
   :depends on networkx: ``3.1.*``
   :depends on numexpr: ``2.8.3.*``
   :depends on numpy: ``1.24.4.*``
   :depends on openpyxl: ``3.1.5.*``
   :depends on packaging: ``25.0.*``
   :depends on pandas: ``1.4.4.*``
   :depends on pillow: ``10.4.0.*``
   :depends on pluggy: ``1.5.0.*``
   :depends on pyarrow: ``17.0.0.*``
   :depends on pybedtools: ``0.10.0.*``
   :depends on pysam: ``0.22.1.*``
   :depends on pytables: ``3.7.0.*``
   :depends on pytest: ``8.3.4.*``
   :depends on python: ``>=3.8,<3.9``
   :depends on pytorch: ``2.3.0.*``
   :depends on requests: ``2.32.3.*``
   :depends on rs3: ``0.0.16.*``
   :depends on scikit-learn: ``1.1.1.*``
   :depends on scipy: ``1.9.1.*``
   :depends on seaborn: ``0.13.2.*``
   :depends on six: ``1.16.0.*``
   :depends on sympy: ``1.13.3.*``
   :depends on threadpoolctl: ``3.5.0.*``
   :depends on tornado: ``6.4.1.*``
   :depends on tqdm: ``4.67.1.*``
   :depends on typing_extensions: ``4.12.2.*``
   :depends on unicodedata2: ``15.1.0.*``
   :depends on urllib3: ``2.2.3.*``
   :depends on xlrd: ``2.0.1.*``

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

    pixi global install crisprhawk

to add into an existing workspace instead, run::

    pixi add crisprhawk

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install crisprhawk

Alternatively, to install into a new environment, run::

    conda create -n envname crisprhawk

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/crisprhawk:<tag>

(see `crisprhawk/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_crisprhawk| image:: https://img.shields.io/conda/dn/bioconda/crisprhawk.svg?style=flat
   :target: https://anaconda.org/bioconda/crisprhawk
   :alt:   (downloads)
.. |docker_crisprhawk| image:: https://quay.io/repository/biocontainers/crisprhawk/status
   :target: https://quay.io/repository/biocontainers/crisprhawk
.. _`crisprhawk/tags`: https://quay.io/repository/biocontainers/crisprhawk?tab=tags


.. raw:: html

    <script>
        var package = "crisprhawk";
        var versions = ["0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/crisprhawk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/crisprhawk/README.html